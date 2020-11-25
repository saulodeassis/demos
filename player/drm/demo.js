var config = {
  key: '<YOUR PLAYER KEY>',
  cast: {
    enable: true
  }
};

var source = {
  dash: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
  hls: 'http://forcestrem.com:2082/saulo982477615/982477615/58961.m3u8',
  smooth: 'https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest',
  drm: {
    widevine: {
      LA_URL: 'https://widevine-proxy.appspot.com/proxy'
    },
    playready: {
      LA_URL: 'https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=='
    }
  }
};
