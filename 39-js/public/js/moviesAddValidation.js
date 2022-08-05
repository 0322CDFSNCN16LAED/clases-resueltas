const isEmpty = (input) => input.value.trim() != "";

const validations = [
  {
    inputName: "title",
    validations: [
      {
        validator: isEmpty,
        errorMsg: "Titulo no puede ser vacío",
      },
    ],
  },
  {
    inputName: "awards",
    validations: [
      {
        validator: isEmpty,
        errorMsg: "Premio no puede ser vacío",
      },
      {
        validator: (input) => input.value >= 0 && input.value <= 10,
        errorMsg: "Premio no puede menor a 0 o mayor a 10",
      },
    ],
  },
];

window.onload = function () {
  const formulario = document.querySelector("#formulario");
  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//

  formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const errores = [];

    //Hacer las validaciones
    validations.forEach((inputToValidate) => {
      const input = formulario[inputToValidate.inputName];
      for (const validation of inputToValidate.validations) {
        const isValid = validation.validator(input);
        if (!isValid) {
          errores.push(validation.errorMsg);
          input.parentElement.classList.add("is-invalid");
          input.parentElement.classList.remove("is-valid");
          input.parentElement.querySelector(".error").innerHTML =
            validation.errorMsg;
          return;
        }
      }
      input.parentElement.classList.add("is-valid");
      input.parentElement.classList.remove("is-invalid");
      input.parentElement.querySelector(".error").innerHTML = "";
    });

    //Si no fallaron las validaciones
    if (errores.length == 0) {
      // formulario.submit();
      console.log("No hay errores, yay!");
    } else {
      console.log(errores);
    }
  });
};
