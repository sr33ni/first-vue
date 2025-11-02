export default {
  mounted(el) {
    if (!el.classList.contains('box-to-observe')) {
      el.classList.add('box-to-observe')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('active')
          } else {
            el.classList.remove('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
  },
}
