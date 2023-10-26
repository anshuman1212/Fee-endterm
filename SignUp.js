let popup = document.getElementById("popup");
      const namei = document.getElementById('name')
      const password = document.getElementById('password')
      const sub = document.getElementById('sub')
      const errorElement = document.getElementById('error')
      const emai = document.getElementById('email')
      const cp = document.getElementById("cnpassword")
      
      sub.addEventListener('click', () => {
        let messages = []
        if (namei.value === '' || namei.value == null) {
          messages.push('---Name is required---')
        }
        
        if(!isNaN(namei.value)){
            messages.push("---Please correct your name---")
        }
        if (password.value.length <= 6) {
          messages.push('---Password must be longer than 6 characters---')
        }
      
        if (password.value.length >= 20) {
          messages.push('---Password must be less than 20 characters---')
        }
      
        if (password.value === 'password') {
          messages.push('---Password cannot be password---')
        }
        if(cp.value != password.value){
            messages.push("---Confirm password and password don't match---")
        }
        if (messages.length > 0) {
        //   e.preventDefault()
          errorElement.innerText = messages.join(' || ')
      }
      if(messages.length==0){
        popup.classList.add("open-popup");
      }
      
      })