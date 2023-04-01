Kakao.init('07eb451c92bcdb420b4d4309977bb981');

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());


function kakaoShare() {
  Kakao.Link.createScrapButton({
    container: '#kakao-link-btn',
    requestUrl: window.location.href,
    templateId : 91999
});

}
