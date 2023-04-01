const url = encodeURI(window.location.href);


const shareTwitter = () => {
  const text = '나와 닮은 가비지타임 캐릭터는?'
  window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url)
}

