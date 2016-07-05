function pageSlideTo (direction) {
  var sliders = document.getElementsByClassName('page-slider-to-' + direction)
  var sliding = document.getElementsByClassName('page-slider-sliding-section')[0]
  var len = sliders.length
  for (var i = 0; i < len; i++) {
    var slider = sliders[i]
    slider.addEventListener('click', function (e) {
      e.preventDefault()
      var sign = direction === 'left' ? '-' : ''
      var style = {
        transition: 'all 0.3s ease',
        transform: 'translate(' + sign + '1000px, 0)'
      }
      Object.assign(sliding.style, style)
      setTimeout(function () {
        window.location.href = slider.href
      }, 300)
    })
  }
}

function pageSlideFrom (direction) {
  var sliders = document.getElementsByClassName('page-slider-from-' + direction)
  var len = sliders.length
  var sign = direction === 'left' ? '' : '-'
  for (var i = 0; i < len; i++) {
    var slider = sliders[i]
    console.log(slider)
    Object.assign(slider.style, {
      transform: 'translate(' + sign + '1000px, 0)'
    })
    setTimeout(function () {
      Object.assign(slider.style, {
        transition: 'all 0.3s ease',
        transform: 'translate(0, 0)'
      })
    }, 300)
  }
}

window.addEventListener('load', function () {
  pageSlideTo('left')
  pageSlideTo('right')
  pageSlideFrom('left')
  pageSlideFrom('right')
})
