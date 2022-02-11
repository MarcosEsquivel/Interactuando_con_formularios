
window.addEventListener("load", () => {
     /* console.log("Server listo"); */
     const qs = (tag) => {
         return document.querySelector(tag) 
    } 

    const funcValidate = (Obj) => {
      let arr = Object.values(validate)
      if (!arr.includes(false)) {
        button.disabled = false
        button.classList.remove("bttn-invalid")
       } else {
         button.disabled = true
         button.classList.add("bttn-invalid")
       }
    }
   
     const title = qs("#title") 
     const form = qs("form")
     const select = qs("select")
     const awards = qs("#awards")
     const smallAw = qs(".awards")
     const inputs = document.querySelectorAll("input")
     const small = document.querySelectorAll("small")
     const smallTitle = qs("small.title")
     const smallAwards = qs("small.awards")
     const button = qs("button.botonAgregar") 
     const len = qs("#length")
     const smallLen = qs("small.length")
     const genre = qs("select#genre_id")
     const smallGenre = qs("small.genre_id")
     const date = qs("#date")
  /*    console.log(date); */
     const smallDate = qs("small.date")
     const ulErrors = qs("div.errors ul")

     let arrErrors = []


     const validate = {
       title: false,
       awards: false,
       len: false,
       date: false
     }

     button.disabled = true
     button.classList.add("bttn-invalid")

     title.focus();

     title.addEventListener("input", (e) => {
     if (e.target.value.length < 3) {
       title.classList.add("is-invalid")
       title.classList.remove("is-valid")
       smallTitle.innerHTML = "El titulo debe tener mas de 2 caracteres"
       
       validate.title = false

     } else {
       title.classList.remove("is-invalid")
       title.classList.add("is-valid")
       smallTitle.innerHTML = ""
      validate.title = true

     }

     funcValidate(validate)

     })

     awards.addEventListener("input", (e) => {

       if (e.target.value < 0 || e.target.value > 10) {
         awards.classList.add("is-invalid")
         awards.classList.remove("is-valid")
         smallAwards.innerHTML = "El numero de premios tiene que estar entre 0 y 10"
         validate.awards = false

       } else {
        awards.classList.remove("is-invalid")
        awards.classList.add("is-valid")
        smallAwards.innerHTML = ""
        validate.awards = true
       }

       funcValidate(validate)

     })

     len.addEventListener("input", (e) => {
      if (e.target.value < 60 || e.target.value > 360) {
        len.classList.add("is-invalid")
        len.classList.remove("is-valid")
        smallLen.innerHTML = "La duracion tiene que estar entre 60 y 350"
        validate.len = false

      } else {
       len.classList.remove("is-invalid")
       len.classList.add("is-valid")
       smallLen.innerHTML = ""
       validate.len = true
      }
       
      funcValidate(validate)

     })


     date.addEventListener("input", (e) => {
       const now = new Date()
       let dateMovie = Date.parse(e.target.value)
       let actual = Date.parse(now)

     
      if (actual < dateMovie) {
        date.classList.add("is-invalid")
        date.classList.remove("is-valid")
        smallDate.innerHTML = "La fecha tiene que ser anterior a la fecha actual"
        validate.date = false

      } else {
        date.classList.remove("is-invalid")
        date.classList.add("is-valid")
        smallDate.innerHTML = ""
        validate.date = true

      }

      funcValidate(validate)
      
     })

     genre.addEventListener("input", (e) => {

       if (e.target.value < 1 || e.target.value > 12) {
         genre.classList.add("is-invalid")
         genre.classList.remove("is-valid")
         smallGenre.innerHTML = "Debes seleccionar un genero"
         validate.genre = false

       } else {
        genre.classList.add("is-valid")
        genre.classList.remove("is-invalid")
        smallGenre.innerHTML = ""
        validate.genre = true

       }

      funcValidate(validate)

     })

     form.addEventListener("submit", (e) => {

    if (title.value === "") {
      arrErrors.push("El titulo debe tener mas de 2 caracteres")
    }
     
if (awards.value === ""){
  arrErrors.push("El campo premio no debe estar vacio")
} else if (awards.value < 0 || awards.value > 10) {
    arrErrors.push("Los premios tienen que estar entre 0 y 10")
}

      for ( let i = 0; i < inputs.length; i++) {

           if (inputs[i].value === "") {
            e.preventDefault()
              inputs[i].classList.add("is-invalid")
              small[i].innerHTML = "Este campo no puede estar vacio"
           
              button.disable = true

           } else if (inputs[i].classList.contains("is-invalid")) {
             inputs[i].classList.remove("is-invalid")
             small[i].innerHTML = ""
             button.disable = false
             button.classList.remove("bttn-invalid")

           }
      }
      
      if (awards.value > 10 || awards.value < 0) {
        e.preventDefault()
        smallAw.innerHTML = "Los premios tienen que estar entre 0 y 10"
      }


      if (select.value === "") {
        e.preventDefault()
        select.classList.add("is-invalid")
        small[5].innerHTML = "Este campo no puede estar vacio"


      } else if (select.classList.contains("is-invalid")) {
        select.classList.remove("is-invalid")
      }


      if (arrErrors.length > 0) {
        for (let i = 0; i < arrErrors.length; i++) {
          ulErrors.innerHTML += `<li>${arrErrors[i]}</li>`          
        }

      }

     })
     
})