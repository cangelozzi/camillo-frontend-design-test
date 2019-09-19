;(() => {
  console.log("Welcome to Camillo's Frontend Test!")
  var rellax = new Rellax('.rellax')

  //! VARIABLES
  let copyrightYear = document.querySelector('#c_year')
  let bookdemoform = document.querySelector('#bookdemoform')
  let bookdemo = document.querySelector('#bookdemo__contact')
  let bookdemobtn = document.querySelector('#bookdemo')
  let firstname = document.querySelector('#firstname')
  let lastname = document.querySelector('#lastname')
  let email = document.querySelector('#email')
  let phone = document.querySelector('#phone')
  let formerror = document.querySelector('#formerror')
  let fname_error = document.querySelector('#fname_error')
  let lname_error = document.querySelector('#lname_error')
  let email_format = document.querySelector('#email_format')
  let email_error = document.querySelector('#email_error')
  let phone_error = document.querySelector('#phone_error')
  let dots = document.querySelector('#dots')
  let demosent = document.querySelector('#demosent')
  let anotherdemo = document.querySelector('#anotherdemo')

  //! FUNCTIONS
  const initialSetup = () => {
    // set year
    copyrightYear.textContent = `[${new Date().getFullYear()}]`

    // reset inputs
    firstname.value = ''
    lastname.value = ''
    email.value = ''
    phone.value = ''
  }

  const resetFormErrors = () => {
    fname_error.style.display = 'none'
    lname_error.style.display = 'none'
    email_error.style.display = 'none'
    email_format.style.display = 'none'
    phone_error.style.display = 'none'
    firstname.style.border = '1px solid #ccc'
    lastname.style.border = '1px solid #ccc'
    email.style.border = '1px solid #ccc'
    phone.style.border = '1px solid #ccc'
  }

  const isSubmitted = () => {
    formerror.style.display = 'none'
    bookdemoform.style.display = 'none'
    dots.style.display = 'flex'
    bookdemo.scrollIntoView()
    setTimeout(() => {
      dots.style.display = 'none'
      demosent.style.display = 'flex'
    }, 1000)
  }

  const formCheck = () => {
    // check single form inputs
    if (!firstname.value) {
      fname_error.style.display = 'block'
      firstname.style.border = '1px solid #d0021b'
    }
    if (!lastname.value) {
      lname_error.style.display = 'block'
      lastname.style.border = '1px solid #d0021b'
    }
    if (email.value.indexOf('@') === -1 || !email.value) {
      email_error.style.display = 'block'
      email_format.style.display = 'block'
      email.style.border = '1px solid #d0021b'
    }
    if (!phone.value) {
      phone_error.style.display = 'block'
      phone.style.border = '1px solid #d0021b'
    }

    // Display general invalid form message
    if (
      !firstname.value ||
      !lastname.value ||
      email.value.indexOf('@') === -1 ||
      !email.value ||
      !phone.value
    ) {
      formerror.style.display = 'flex'
    } else {
      isSubmitted()
    }
  }

  //! EVENTS
  window.addEventListener('load', initialSetup())

  bookdemoform.addEventListener('submit', e => {
    e.preventDefault()
    resetFormErrors()
    formCheck()
  })

  anotherdemo.addEventListener('click', () => {
    demosent.style.display = 'none'
    bookdemoform.style.display = 'block'
    initialSetup()
  })

  bookdemobtn.addEventListener('click', () => {
    bookdemo.scrollIntoView()
  })
})()
