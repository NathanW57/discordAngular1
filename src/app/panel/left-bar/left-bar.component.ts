import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ChannelService } from '../../service/channel.service';
import { Channel } from '../../model/Channel';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit, OnDestroy {
  channels$: Observable<Channel[]> | undefined;
  private userLoggedInSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    public login: LoginService,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    const userId = this.login.getUserId() ?? 0; // Utiliser une valeur par défaut (0) si l'ID de l'utilisateur est null ou undefined
    this.channels$ = this.channelService.getUserChannels(userId);

    this.userLoggedInSubscription = this.login._userConnected.subscribe(() => {
      const userId = this.login.getUserId() ?? 0;
      this.channels$ = this.channelService.getUserChannels(userId);
    });
  }

  ngOnDestroy(): void {
    this.userLoggedInSubscription?.unsubscribe();
  }

  redirectToAdminPanel(): void {
    this.router.navigateByUrl('/adminPanel');
  }

  redirectToChat(channelId: number): void {
    this.router.navigateByUrl('/chat/' + channelId);
  }
}
