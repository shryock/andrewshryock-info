import { Component } from '@angular/core';

@Component({
    selector: 'social',
    template: `
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="andrew-shryock"><a class="LI-simple-link" href='https://www.linkedin.com/in/andrew-shryock?trk=profile-badge'>Andrew Shryock</a></div><br/>
        <a href="https://twitter.com/AndrewShryock" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @AndrewShryock</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    `
})

export class SocialComponent {

}