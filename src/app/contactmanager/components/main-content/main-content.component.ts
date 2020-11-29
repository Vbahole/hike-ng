import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Stat } from '../../models/stat';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { StatService } from '../../services/stat.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  stat: Stat;
  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private statService: StatService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.user = null;

      this.service.users.subscribe(users => {
        if (users.length == 0) return;

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500)
      });
/*
      this.stat = null;
      this.statService.stats.subscribe(stats => {
        if (stats.length == 0) return;

        setTimeout(() => {
          this.stat = this.statService.theStats();
        }, 500)
      });
      */
    })
  }
}
