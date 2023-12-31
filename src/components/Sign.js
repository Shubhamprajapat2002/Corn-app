import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Sign = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
         number: "",
      });
      const [data,setData]=useState([])
    
      const getData = (e) => {
        const { value, name } = e.target;
    
        setInput(() => {
          return {
            ...input,
            [name]: value,
          };
        });
      };
    
      const addData = (e) => {
        e.preventDefault();
        const { name, email, number } = input;
        if(name === "")
        {
            alert("fill the name")
        }else if(email === "")
        {
            alert("fill the email")
        }else if(number === "")
        {
            alert("fill the number")
        }else{
          alert("data sucesfull added")
            localStorage.setItem("DataStoreDone",JSON.stringify([...data,input]))
          
        }
      };
    
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-md-6 box pt-5 px-4">
            <div className="heading">
              <h1 className="bolder">Welcome Back!</h1>
            </div>
            <div className="paragraph mt-4">
              <p className="text-center">
                Will Remind you dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt. Will Remind
              </p>
            </div>
            <button className="btn fs-6  btnn">Sign in</button>
            <div className="svg">
              <svg
                width="260"
                height="296"
                viewBox="0 0 342 386"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_395_466)">
                  <path
                    d="M60.2263 342.988L59.4867 345.873L67.8545 348.019L68.5942 345.133L60.2263 342.988Z"
                    fill="#F99746"
                  />
                  <path
                    d="M64.4971 347.12L63.7579 350.005L72.1261 352.149L72.8653 349.264L64.4971 347.12Z"
                    fill="#F99746"
                  />
                  <path
                    d="M68.7796 351.281L68.0404 354.166L76.4086 356.31L77.1478 353.425L68.7796 351.281Z"
                    fill="#F99746"
                  />
                  <path
                    d="M73.0445 355.49L72.3048 358.375L80.6727 360.521L81.4123 357.635L73.0445 355.49Z"
                    fill="#F99746"
                  />
                  <path
                    opacity="0.5"
                    d="M201.773 377.548L307.758 316.604C314.899 312.487 313.995 305.282 305.762 300.526L202.895 241.125C194.662 236.369 182.188 235.854 175.062 239.971L69.0767 300.915C61.9351 305.032 62.8395 312.237 71.0726 316.994L173.939 376.394C182.172 381.15 194.647 381.665 201.773 377.548Z"
                    fill="#C4D9E8"
                  />
                  <path
                    d="M77.5281 239.379L95.8498 228.806L28.3012 189.803C25.1046 187.963 25.1046 184.969 28.3012 183.113L97.3155 143.269C100.512 141.428 105.705 141.428 108.885 143.269L176.434 182.271L194.756 171.698L127.207 132.695C113.922 125.023 92.279 125.023 78.9938 132.695L9.96387 172.524C-3.33691 180.197 -3.33691 192.688 9.96387 200.361L77.5125 239.363L77.5281 239.379Z"
                    fill="#396CAA"
                  />
                  <path
                    d="M47.9638 244.041C47.9638 234.248 53.9203 222.864 61.2646 218.622L183.654 147.947C186.944 146.044 189.953 145.92 192.277 147.214L338.414 232.143L197.095 338.639L53.1251 255.067C52.6729 254.864 52.2519 254.63 51.8465 254.334C49.4452 252.509 47.9482 248.938 47.9482 244.041H47.9638Z"
                    fill="#D4ECFF"
                  />
                  <path
                    d="M197.095 338.639L53.1251 255.067C52.6729 254.864 52.2519 254.63 51.8465 254.334C49.4452 252.509 47.9482 248.938 47.9482 244.041C47.9482 239.145 49.3204 234.341 51.5346 229.881L215.65 324.65L197.079 338.639H197.095Z"
                    fill="#2B478B"
                  />
                  <path
                    d="M206.31 338.265L328.699 267.59C336.043 263.348 342 251.964 342 242.17C342 232.377 336.043 227.87 328.699 232.112L206.31 302.787C198.966 307.029 193.009 318.413 193.009 328.206C193.009 338 198.966 342.506 206.31 338.265Z"
                    fill="#396CAA"
                  />
                  <path
                    d="M224.632 314.42L239.352 305.937C240.817 305.095 242.002 302.818 242.002 300.869C242.002 298.919 240.817 298.015 239.352 298.857L224.632 307.34C223.166 308.183 221.981 310.459 221.981 312.409C221.981 314.358 223.166 315.263 224.632 314.42Z"
                    fill="white"
                  />
                  <path
                    d="M218.738 263.738L244.809 280.549L257.486 278.49L226.503 263.504L218.738 263.738Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M250.251 348.619C250.251 348.619 257.751 344.83 262.367 350.475C266.982 356.121 273.563 369.423 273.765 378.421C273.968 387.419 266.655 386.811 262.305 384.674C257.954 382.554 245.246 364.105 244.466 360.487C243.702 356.869 245.371 351.988 246.602 351.037C247.819 350.085 250.251 348.619 250.251 348.619Z"
                    fill="#746356"
                  />
                  <path
                    d="M248.614 346.811L248.271 354.592C248.193 356.245 249.035 357.82 250.469 358.631C251.779 359.38 253.682 359.941 256.254 359.536C261.915 358.631 262.414 357.009 262.819 349.228C263.224 341.446 248.614 346.811 248.614 346.811Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M277.741 333.664C277.741 333.664 285.242 329.875 289.857 335.52C294.473 341.165 301.053 354.467 301.256 363.466C301.458 372.464 294.145 371.856 289.795 369.719C285.444 367.598 272.736 349.15 271.956 345.532C271.192 341.914 272.861 337.033 274.093 336.081C275.325 335.13 277.741 333.664 277.741 333.664Z"
                    fill="#746356"
                  />
                  <path
                    d="M276.104 331.855L275.761 339.637C275.683 341.29 276.525 342.865 277.96 343.676C279.27 344.425 281.172 344.986 283.745 344.58C289.405 343.676 289.904 342.054 290.31 334.272C290.715 326.491 276.104 331.855 276.104 331.855Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M209.101 189.039C211.316 152.875 248.255 194.357 248.255 194.357L273.531 219.137L296.297 244.151C300.741 249.032 302.815 255.628 301.957 262.178L292.742 332.292C292.29 335.754 289.327 338.311 285.834 338.28C284.852 338.28 283.714 338.187 282.419 337.984C274.202 336.705 274.81 328.892 274.81 328.892L276.494 263.316L228.686 234.497C228.686 234.497 206.872 225.203 209.101 189.054V189.039Z"
                    fill="#D4ECFF"
                  />
                  <path
                    d="M258.235 250.919L265.033 248.424C265.189 248.424 276.603 259.449 276.494 263.317L271.38 264.954L258.531 252.478L258.235 250.919Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M218.738 263.738C218.738 263.738 190.327 247.519 186.928 240.72C185.603 238.053 183.529 235.277 191.809 231.254L229.7 258.264L228.062 267.558L218.738 263.753V263.738Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M181.627 202.996C183.997 166.848 220.78 208.314 220.78 208.314L246.057 233.094L268.822 258.108C273.266 262.989 275.34 269.585 274.483 276.135L265.267 346.249C264.815 349.711 261.852 352.269 258.359 352.237C257.377 352.237 256.239 352.144 254.945 351.941C246.727 350.662 247.335 342.849 247.335 342.849L249.019 277.274L201.211 248.455C201.211 248.455 179.459 236.057 181.627 203.012V202.996Z"
                    fill="#D4ECFF"
                  />
                  <path
                    d="M203.472 86.7532C175.467 98.3557 176.029 114.917 176.029 114.917C176.029 114.917 181.517 175.596 179.646 216.127C178.867 233.063 269.649 234.357 256.114 189.164C240.147 135.861 246.135 92.726 238.666 86.223C231.196 79.72 210.723 83.7591 203.472 86.7532Z"
                    fill="#2B478B"
                  />
                  <path
                    d="M194.46 101.428C195.925 107.12 203.379 110.114 211.097 108.118C218.816 106.122 223.899 99.8995 222.433 94.2231C220.968 88.5466 213.514 85.5368 205.796 87.533C198.077 89.5291 192.994 95.7514 194.46 101.428Z"
                    fill="#FFB27D"
                  />
                  <path
                    d="M206.373 110.067C208.01 110.067 209.725 109.865 211.44 109.412C215.448 108.383 218.941 106.247 221.264 103.393C223.681 100.43 224.554 97.0458 223.743 93.88C222.106 87.4862 213.904 84.0554 205.484 86.223C201.476 87.2523 197.984 89.3888 195.676 92.2426C193.259 95.2056 192.37 98.5896 193.197 101.755C194.506 106.839 199.979 110.067 206.404 110.067H206.373ZM210.583 88.2503C215.775 88.2503 220.126 90.6675 221.139 94.5506C221.732 96.8742 221.046 99.4161 219.174 101.709C217.21 104.11 214.231 105.935 210.77 106.824C203.769 108.617 197.048 106.059 195.769 101.1C195.177 98.7768 195.863 96.2348 197.734 93.9424C199.699 91.5408 202.677 89.7162 206.139 88.8273C207.651 88.4375 209.164 88.2503 210.598 88.2503H210.583Z"
                    fill="white"
                  />
                  <path
                    d="M214.699 85.4902C214.699 85.4902 214.45 86.613 214.949 95.4864C215.105 98.2779 205.328 100.882 202.817 98.3558C200.291 95.8295 201.305 93.2096 200.697 83.7124C200.089 74.2152 214.715 85.4902 214.715 85.4902H214.699Z"
                    fill="#FFB27D"
                  />
                  <path
                    d="M200.681 83.7124C200.681 83.7124 203.082 92.5078 214.949 95.8919L214.762 87.8918L200.681 83.7124Z"
                    fill="#ED985F"
                  />
                  <path
                    d="M193.181 61.3496C190.203 72.8741 197.126 84.6325 208.649 87.6111C220.172 90.5896 231.929 83.6656 234.908 72.1411C237.886 60.6166 230.963 48.8582 219.439 45.8796C207.916 42.9011 196.159 49.8251 193.181 61.3496Z"
                    fill="#FFB27D"
                  />
                  <path
                    d="M209.086 67.525C209.086 67.525 220.952 72.6089 229.169 72.6713C237.387 72.7337 235.578 65.8408 235.578 65.8408L211.191 62.3164L209.086 67.525Z"
                    fill="#2C3A64"
                  />
                  <path
                    d="M231.618 68.8662C231.618 68.8662 221.279 64.4841 212.22 66.3087C210.084 66.7453 208.119 67.8837 206.747 69.5679C206.295 70.1138 205.733 70.6284 205.094 70.7687C203.488 71.1274 200.853 64.4529 197.734 64.3125C194.616 64.1566 192.526 66.371 195.083 70.4724C197.641 74.5738 196.783 79.1743 195.598 79.8293C194.413 80.4842 181.907 70.9091 192.947 49.0453C203.987 27.1816 232.007 38.9555 236.358 43.3844C236.358 43.3844 240.942 47.3923 244.684 43.8211C244.684 43.8211 248.863 75.182 231.633 68.8506L231.618 68.8662Z"
                    fill="#2C3A64"
                  />
                  <path
                    d="M191.746 159.253V175.643C191.746 177.514 192.542 179.308 193.929 180.587L227.61 211.293L223.79 217.141L179.303 184.875C177.229 183.362 175.888 181.054 175.623 178.497L172.614 149.896L191.746 159.237V159.253Z"
                    fill="#FFB27D"
                  />
                  <path
                    d="M178.414 106.715C178.414 106.715 168.201 122.091 164.396 162.544C164.396 162.544 181.845 168.189 191.762 164.992C201.663 161.779 178.43 106.73 178.43 106.73L178.414 106.715Z"
                    fill="#233862"
                  />
                  <path
                    d="M193.602 126.146C193.602 126.146 197.609 147.557 197.828 157.616C197.89 160.376 196.206 162.871 193.602 163.822V126.146Z"
                    fill="#2B478B"
                  />
                  <path
                    d="M202.35 232.61L209.787 231.628L257.845 203.885C259.389 202.996 262.071 203.105 263.848 204.135L297.903 223.784L302.41 223.191V227.667C302.441 228.26 302.098 228.821 301.38 229.242L246.914 260.681C245.371 261.57 242.689 261.461 240.911 260.431L203.831 239.02C202.833 238.443 202.334 237.694 202.365 236.993V232.579L202.35 232.61Z"
                    fill="#173D7A"
                  />
                  <path
                    d="M238.463 215.082L241.878 213.117H279.41L297.919 223.8L302.425 223.207V227.683C302.456 228.275 302.113 228.837 301.396 229.258L246.93 260.697C246.119 261.164 244.981 261.352 243.827 261.274L238.478 215.067L238.463 215.082Z"
                    fill="#396CAA"
                  />
                  <path
                    d="M300.414 223.457L302.409 223.191V227.667C302.441 228.26 302.098 228.821 301.38 229.242L300.414 229.804V223.457Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M246.369 260.962C244.903 261.523 242.813 261.398 241.254 260.65V253.024H246.369V260.962Z"
                    fill="#274F89"
                  />
                  <path
                    d="M246.915 256.221L301.381 224.782C302.924 223.893 302.722 222.334 300.944 221.304L263.864 199.893C262.086 198.864 259.389 198.754 257.861 199.643L203.395 231.082C201.851 231.971 202.054 233.531 203.831 234.56L240.911 255.971C242.689 257.001 245.386 257.11 246.915 256.221Z"
                    fill="white"
                  />
                  <path
                    d="M247.834 251.449L293.116 225.296C294.395 224.564 294.239 223.269 292.758 222.411L272.892 211.23C271.411 210.372 269.181 210.279 267.887 211.027L222.605 237.18C221.326 237.913 221.482 239.207 222.964 240.065L242.829 251.246C244.31 252.104 246.54 252.197 247.834 251.449Z"
                    fill="#D4ECFF"
                  />
                  <path
                    d="M261.759 198.864L262.32 202.622C262.803 205.819 262.71 209.078 262.071 212.26L261.4 215.566C261.026 217.437 259.544 218.887 257.673 219.23C256.208 219.495 254.82 218.466 254.664 216.985L253.76 208.953C253.76 208.953 251.701 211.651 250.719 211.651C249.737 211.651 251.826 203.604 254.071 199.051C256.317 194.497 261.759 198.864 261.759 198.864Z"
                    fill="#FFC2B0"
                  />
                  <path
                    d="M243.297 139.136L249.144 150.707C250.532 153.436 251.343 156.43 251.53 159.487L254.071 199.051L261.759 198.864L265.251 154.434C265.361 153.062 265.298 151.69 265.049 150.333L261.057 127.799L243.297 139.136Z"
                    fill="#FFB27D"
                  />
                  <path
                    d="M248.754 259.246L253.323 253.289L301.349 225.484C302.893 224.595 304.14 222.209 304.125 220.15L304.078 180.836L306.838 177.234L304.25 175.737C303.751 175.425 303.096 175.425 302.363 175.846L247.943 207.363C246.4 208.252 245.152 210.638 245.168 212.696L245.215 255.519C245.215 256.673 245.604 257.484 246.228 257.796L248.754 259.262V259.246Z"
                    fill="#173D7A"
                  />
                  <path
                    d="M281.967 236.696L285.382 234.716L304.109 202.185V180.821L306.854 177.218L304.265 175.721C303.766 175.409 303.111 175.409 302.378 175.83L247.959 207.347C247.148 207.815 246.415 208.704 245.901 209.749L281.967 236.712V236.696Z"
                    fill="#396CAA"
                  />
                  <path
                    d="M305.622 178.809L306.854 177.203L304.265 175.705C303.766 175.394 303.111 175.394 302.378 175.815L301.412 176.376L305.622 178.809Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M247.444 207.69C246.244 208.673 245.293 210.544 245.168 212.275L250.485 215.347L253.027 210.918L247.429 207.69H247.444Z"
                    fill="#274F89"
                  />
                  <path
                    d="M250.532 208.844L304.951 177.327C306.495 176.438 307.742 177.374 307.742 179.432L307.789 222.256C307.789 224.314 306.542 226.7 305.014 227.589L250.594 259.106C249.051 259.995 247.803 259.059 247.803 257.001L247.756 214.177C247.756 212.119 249.004 209.733 250.532 208.844Z"
                    fill="#5793CE"
                  />
                  <path
                    d="M223.774 217.14L224.648 218.949C225.645 221.024 227.236 222.786 229.201 223.987L234.611 227.324C236.295 228.353 238.416 228.447 240.131 227.449C240.194 227.417 240.256 227.371 240.318 227.339C242.034 226.263 242.19 223.799 240.771 222.349L235.126 216.548C235.126 216.548 238.307 218.981 239.196 217.998C239.851 217.281 236.124 213.772 233.255 213.663C230.386 213.554 227.626 211.292 227.626 211.292L223.805 217.14H223.774Z"
                    fill="#FFC2B0"
                  />
                  <path
                    d="M238.104 86.1296C238.104 86.1296 258.812 108.664 267.17 129.343C267.17 129.343 260.09 142.099 242.751 147.105C225.412 152.111 238.104 86.1296 238.104 86.1296Z"
                    fill="#233862"
                  />
                  <path
                    d="M246.649 145.764L243.297 113.342L251.202 143.721C249.799 144.454 248.271 145.14 246.649 145.764Z"
                    fill="#2B478B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_395_466">
                    <rect width="342" height="386" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="col-md-6 input mt-5 py-1 ">
            <div className="headingInput">
              <h1>
                Create <span>Account</span>
              </h1>
            </div>
            <div className="para">
              Will Remind you dolor sit amet, consectetur
            </div>
            <div className="fromedit">
              <form className="mt-5 formside">
                {/* <div className="mb-4">

                             type="text" placeholder='Name' className="form-control inputedit" />
                            </div> */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text svdEdit"
                      id="basic-addon1"
                    >
                      <svg
                        className="svdEdit"
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="32"
                        viewBox="0 0 11 15"
                        fill="none"
                      >
                        <path
                          d="M5.44655 7.26419C6.16491 7.26419 6.86714 7.05117 7.46443 6.65207C8.06173 6.25297 8.52726 5.68572 8.80217 5.02204C9.07707 4.35836 9.149 3.62807 9.00885 2.92351C8.86871 2.21895 8.52278 1.57177 8.01483 1.06382C7.50687 0.55586 6.85969 0.209936 6.15513 0.0697913C5.45058 -0.0703539 4.72028 0.00157374 4.0566 0.276478C3.39293 0.551383 2.82567 1.01692 2.42657 1.61421C2.02747 2.21151 1.81445 2.91374 1.81445 3.6321C1.81541 4.59509 2.19839 5.51837 2.87933 6.19931C3.56027 6.88025 4.48355 7.26323 5.44655 7.26419ZM5.44655 1.2107C5.92545 1.2107 6.39361 1.35271 6.7918 1.61878C7.19 1.88484 7.50036 2.26302 7.68363 2.70547C7.8669 3.14792 7.91485 3.63478 7.82142 4.10449C7.72799 4.57419 7.49737 5.00564 7.15873 5.34428C6.82009 5.68292 6.38864 5.91354 5.91894 6.00697C5.44923 6.1004 4.96237 6.05244 4.51992 5.86917C4.07747 5.6859 3.6993 5.37555 3.43323 4.97735C3.16716 4.57915 3.02515 4.111 3.02515 3.6321C3.02515 2.9899 3.28026 2.37401 3.73436 1.91991C4.18846 1.46581 4.80435 1.2107 5.44655 1.2107Z"
                          fill="#8E8E8E"
                        />
                        <path
                          d="M5.44814 8.47485C4.0037 8.47646 2.61887 9.05097 1.59749 10.0723C0.576116 11.0937 0.00160227 12.4785 0 13.923C0 14.0835 0.0637776 14.2375 0.177303 14.351C0.290828 14.4646 0.4448 14.5283 0.605349 14.5283C0.765898 14.5283 0.91987 14.4646 1.0334 14.351C1.14692 14.2375 1.2107 14.0835 1.2107 13.923C1.2107 12.7992 1.65714 11.7213 2.45182 10.9267C3.24649 10.132 4.3243 9.68555 5.44814 9.68555C6.57198 9.68555 7.64979 10.132 8.44447 10.9267C9.23914 11.7213 9.68558 12.7992 9.68558 13.923C9.68558 14.0835 9.74936 14.2375 9.86289 14.351C9.97641 14.4646 10.1304 14.5283 10.2909 14.5283C10.4515 14.5283 10.6055 14.4646 10.719 14.351C10.8325 14.2375 10.8963 14.0835 10.8963 13.923C10.8947 12.4785 10.3202 11.0937 9.29879 10.0723C8.27741 9.05097 6.89259 8.47646 5.44814 8.47485Z"
                          fill="#8E8E8E"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control inputedit"
                    placeholder="Name"
                    aria-label="Username"
                    onChange={getData}
                    name="name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text svdEdit"
                      id="basic-addon1"
                    >
                      <svg
                        className="svdEdit"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="32"
                        viewBox="0 0 12 11"
                        fill="none"
                      >
                        <path
                          d="M9.5 0H2.5C1.8372 0.000793929 1.20178 0.264441 0.73311 0.73311C0.264441 1.20178 0.000793929 1.8372 0 2.5L0 8.5C0.000793929 9.1628 0.264441 9.79822 0.73311 10.2669C1.20178 10.7356 1.8372 10.9992 2.5 11H9.5C10.1628 10.9992 10.7982 10.7356 11.2669 10.2669C11.7356 9.79822 11.9992 9.1628 12 8.5V2.5C11.9992 1.8372 11.7356 1.20178 11.2669 0.73311C10.7982 0.264441 10.1628 0.000793929 9.5 0ZM2.5 1H9.5C9.79939 1.00059 10.0918 1.09076 10.3395 1.2589C10.5872 1.42705 10.7789 1.66547 10.89 1.9435L7.061 5.773C6.77921 6.05366 6.39771 6.21123 6 6.21123C5.60229 6.21123 5.22079 6.05366 4.939 5.773L1.11 1.9435C1.22107 1.66547 1.41281 1.42705 1.66052 1.2589C1.90824 1.09076 2.20061 1.00059 2.5 1ZM9.5 10H2.5C2.10218 10 1.72064 9.84196 1.43934 9.56066C1.15804 9.27936 1 8.89783 1 8.5V3.25L4.232 6.48C4.70131 6.94813 5.33713 7.21102 6 7.21102C6.66287 7.21102 7.29869 6.94813 7.768 6.48L11 3.25V8.5C11 8.89783 10.842 9.27936 10.5607 9.56066C10.2794 9.84196 9.89783 10 9.5 10Z"
                          fill="#8E8E8E"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control inputedit"
                    placeholder="Email"
                    aria-label="Username"
                    name="email"
                    aria-describedby="basic-addon1"
                    onChange={getData}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text svdEdit"
                      id="basic-addon1"
                    >
                      <svg
                        className="svdEdit"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="32"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_19_101)">
                          <path
                            d="M6.49999 0.500066C6.49999 0.367458 6.55267 0.240281 6.64644 0.146513C6.74021 0.0527445 6.86738 6.6062e-05 6.99999 6.6062e-05C8.32563 0.00152186 9.59655 0.528774 10.5339 1.46614C11.4713 2.40351 11.9985 3.67443 12 5.00007C12 5.13267 11.9473 5.25985 11.8535 5.35362C11.7598 5.44739 11.6326 5.50007 11.5 5.50007C11.3674 5.50007 11.2402 5.44739 11.1464 5.35362C11.0527 5.25985 11 5.13267 11 5.00007C10.9988 3.93957 10.577 2.92284 9.8271 2.17295C9.07722 1.42307 8.06049 1.00126 6.99999 1.00007C6.86738 1.00007 6.74021 0.947388 6.64644 0.853619C6.55267 0.759851 6.49999 0.632674 6.49999 0.500066ZM6.99999 3.00007C7.53043 3.00007 8.03913 3.21078 8.4142 3.58585C8.78928 3.96093 8.99999 4.46963 8.99999 5.00007C8.99999 5.13267 9.05267 5.25985 9.14644 5.35362C9.24021 5.44739 9.36738 5.50007 9.49999 5.50007C9.6326 5.50007 9.75978 5.44739 9.85355 5.35362C9.94731 5.25985 9.99999 5.13267 9.99999 5.00007C9.9992 4.20466 9.68287 3.44206 9.12043 2.87962C8.558 2.31719 7.7954 2.00086 6.99999 2.00007C6.86738 2.00007 6.74021 2.05274 6.64644 2.14651C6.55267 2.24028 6.49999 2.36746 6.49999 2.50007C6.49999 2.63267 6.55267 2.75985 6.64644 2.85362C6.74021 2.94739 6.86738 3.00007 6.99999 3.00007ZM11.5465 8.36957C11.8362 8.66012 11.999 9.05372 11.999 9.46407C11.999 9.87441 11.8362 10.268 11.5465 10.5586L11.0915 11.0831C6.99649 15.0036 -2.96851 5.04107 0.891493 0.933066L1.46649 0.433066C1.75738 0.151405 2.14746 -0.0044094 2.55234 -0.000666517C2.95723 0.00307636 3.34437 0.166075 3.62999 0.453066C3.64549 0.468566 4.57199 1.67207 4.57199 1.67207C4.84691 1.96088 4.99994 2.34453 4.99929 2.74327C4.99864 3.142 4.84435 3.52515 4.56849 3.81307L3.98949 4.54107C4.30992 5.31962 4.78102 6.02719 5.37575 6.62311C5.97047 7.21904 6.67708 7.69157 7.45499 8.01357L8.18749 7.43107C8.47544 7.15542 8.85852 7.00131 9.25714 7.00075C9.65576 7.0002 10.0393 7.15323 10.328 7.42807C10.328 7.42807 11.531 8.35407 11.5465 8.36957ZM10.8585 9.09657C10.8585 9.09657 9.66199 8.17607 9.64649 8.16057C9.54348 8.05843 9.4043 8.00113 9.25924 8.00113C9.11418 8.00113 8.975 8.05843 8.87199 8.16057C8.85849 8.17457 7.84999 8.97807 7.84999 8.97807C7.78203 9.03216 7.70115 9.06762 7.61532 9.08095C7.52948 9.09427 7.44166 9.08501 7.36049 9.05407C6.35272 8.67885 5.43736 8.09143 4.67641 7.33161C3.91546 6.57178 3.32669 5.65728 2.94999 4.65007C2.91659 4.56779 2.9057 4.47811 2.91844 4.39024C2.93119 4.30236 2.9671 4.21946 3.02249 4.15007C3.02249 4.15007 3.82599 3.14107 3.83949 3.12807C3.94163 3.02506 3.99893 2.88587 3.99893 2.74082C3.99893 2.59576 3.94163 2.45657 3.83949 2.35357C3.82399 2.33857 2.90349 1.14107 2.90349 1.14107C2.79894 1.04732 2.66249 0.997114 2.52212 1.00074C2.38174 1.00437 2.24806 1.06155 2.14849 1.16057L1.57349 1.66057C-1.24751 5.05257 7.38799 13.2091 10.3605 10.4001L10.816 9.87507C10.9227 9.7762 10.9868 9.63969 10.9948 9.49442C11.0027 9.34914 10.9538 9.20647 10.8585 9.09657Z"
                            fill="#8E8E8E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_19_101">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control inputedit"
                    placeholder="Mobile Number"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={getData}
                    name="number"
                  />
                </div>

                <button type="submit" onClick={addData} className="btn btneditinput">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sign;
