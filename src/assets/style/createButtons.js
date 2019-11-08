const createButtons = (color, fontWeight) => ({
  base: `
    background-color: transparent;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    padding: 6px 6px;
    transition: all .25s ease-in;
    font-weight: ${fontWeight['medium']}
    
    &:hover {

    }

    &:focus {
      outline: 0;
    }

    &:disabled {
      opacity: 0.6;
      cursor: default;
      pointer-events: none;
    }
  `,
  default: `
    background-color: ${color.c_main};
    border-color: ${color.c_main};
    color: ${color.c_main};
    &:hover {
      background-color: ${color.c_main};
    }
  `,
  // primary: `
  //   background-color: ${color.c_mango};
  //   color: ${color.c_mango};
  //   border-color: ${color.c_mango};
  //   &:hover {
  //     color: ${color.c_grey};
  //     border-color: ${color.c_azure};
  //     background-color: ${color.c_azure};
  //   }
  // `,
  // secondary: `
  //   background-color: ${color.c_greyMid};
  //   color: ${color.c_greyMid};
  //   border-color: ${color.c_greyMid};
  //   &:hover {
  //     color: ${color.c_grey};
  //     background-color: ${color.c_greyMid};
  //   }
  // `,
  // success: `
  //   background-color: ${color.c_green};
  //   color: ${color.c_green};
  //   border-color: ${color.c_green};
  //   &:hover {
  //     color: ${color.c_green};
  //     opacity: 0.8;
  //     background-color: ${color.c_green};
  //   }
  // `,
  // danger: `
  //   background-color: ${color.c_danger};
  //   color: ${color.c_danger};
  //   border-color: ${color.c_danger};
  //   &:hover {
  //     color: ${color.c_danger};
  //     opacity: 0.8;
  //     background-color: ${color.c_danger};
  //     border-color: ${color.c_danger};
  //   }
  // `,
  // facebook: `
  //   background-color: ${color.c_facebook};
  //   color: ${color.c_facebook};
  //   border-color: ${color.c_facebook};
  //   &:hover {
  //     color: ${color.c_facebook};
  //     opacity: 0.8;
  //     background-color: ${color.c_facebook};
  //     border-color: ${color.c_facebook};
  //   }
  // `,
  contained: `
    color: white;
    &:hover {
      color: white;
    }
  `,
  text: `
    border: 1px solid transparent;
    background-color: transparent;
    &:hover {
      border: 1px solid transparent;
      background-color: transparent;
    }
  `,
  outline: `
    background-color: transparent;
    &:hover {
      color: white;
    }
  `,
  block: `
    width: 100%;
  `
})


export default createButtons
