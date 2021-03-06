import React, {useState} from 'react'
import { data } from '../data'
import DemoBtn from './DemoBtn'

import '../styling/sadnessStyle.css'

export default function SadnessSection({ fromIfStatement }) {

  let sadObj = data.find((obj) => {
    if(obj.title === "Sadness") {
      return obj
    }
  })
  console.log(sadObj)

  const[sadness, setSadness] = useState(false)

  // if(sadness) {
  //   return (
  //     <GiTornado size="5em" style={{position: "absolute", top: "300px"}}/>
  //   )
  // }

  return (
    <>
      {/* <section 
        className={"p-relative"}
        id={sadObj.title}
        > */}

        { /* conditional render */
        sadness ? (
        <>
        <section 
          className={"p-relative bg-sad"}
          id={sadObj.title}
          >
          <div className="centered-candles">

          {/* first candle */}
            <svg width="75" height="257" viewBox="0 0 75 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-1">
              <path id="candle-1-flame" d="M37.5001 20.5C33.0001 24.6326 24 25.5 22 36C19.5676 48.7704 28.7862 51.635 36.464 51.1925C46.5 50 51.5001 45 51.5001 32C51.5001 20.8982 56.5001 12 46.5 0C46.5 16 42.9445 15.5 37.5001 20.5Z" fill="#DE3F3F"/>
              <path d="M37 70V37" stroke="black" stroke-width="5"/>
              <rect y="62" width="75" height="195" fill="#C4C4C4"/>
            </g>
           </svg>

           {/* second candle */}
            <svg width="110" height="222" viewBox="0 0 110 222" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="candle-2">
              <path id="candle-2-flame" d="M44.3272 2.63307C52.8955 2.63307 55.1465 22.8964 45.7858 28.5876C36.4251 34.2788 30.7817 56.8493 45.7858 60.2055C60.7899 63.5618 65.4332 62.279 70.009 56.5068C74.5847 50.7346 67.375 38.9708 67.375 25.7218C67.375 16.4019 68.5591 15.4019 60.7899 5.83976C52.0035 -4.9742 34.4496 2.63306 44.3272 2.63307Z" fill="#DE9E3F"/>
              <path d="M55 77V50" stroke="black" stroke-width="5"/>
              <rect y="72" width="110" height="150" fill="#C4C4C4"/>
              </g>
            </svg>

          {/* third candle */}
            <svg width="86" height="227" viewBox="0 0 86 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-3">
            <path id="candle-3-flame" d="M56.5 13.5C58.1 6.3 47.5551 0 41.5551 0C54 8.5 46.5 16 41.5551 19C32.3469 24.5865 27.6998 26.8936 25.0551 30.5C19.5551 38 21.0551 47 33.0551 51C45.0551 55 51.7694 47.5 53.0551 43C54.3408 38.5 50.5551 33.4083 50.5551 28C50.5551 22.5917 54.5 22.5 56.5 13.5Z" fill="#DE6F3F"/>
            <path d="M43 69.3547V40" stroke="black" stroke-width="5"/>
            <rect y="63.9186" width="86" height="163.081" fill="#C4C4C4"/>
            </g>
          </svg>

          {/* fourth candle */}
            <svg width="56" height="253" viewBox="0 0 56 253" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-4">
            <path id="candle-4-flame" d="M28.1161 21.4852C31.3171 25.9261 38.4248 27.4779 39.0209 38.0355C39.7459 50.8758 32.1076 53.005 26.0157 51.9759C18.1112 50.0222 12.5 44 20 31.5C25.22 22.8001 15.5845 13.3024 21.04 3.19904C21.5092 2.3301 22.6772 2.77565 22.6127 3.76107C21.7902 16.3321 24.5315 16.5119 28.1161 21.4852Z" fill="#DE8B3F"/>
            <path d="M28 78.0001V45.0001" stroke="black" stroke-width="5"/>
            <rect y="58.0001" width="56" height="195" fill="#C4C4C4"/>
            </g>
          </svg>
          
          {/* fifth candle */}
            <svg width="86" height="220" viewBox="0 0 86 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="candle-5">
            <path id="candle-5-flame" d="M36.7877 26.3225C33.2861 31.3293 29.5162 30.4908 27.5137 38.1026C24.2062 50.6748 37.5154 51.9037 44.9166 49.814C54.4585 46.4828 57.3974 36.6156 55.4543 27.8278C51.7424 11.0408 45.5734 12.09 49.3011 0C38.0674 7.09269 41.0242 20.265 36.7877 26.3225Z" fill="#CE2424"/>
            <path d="M43 62.3547V33" stroke="black" stroke-width="5"/>
            <rect y="56.9186" width="86" height="163.081" fill="#C4C4C4"/>
            </g>
          </svg>
          
          {/* wax drip */}
          {/* <svg width="545" height="320" viewBox="0 0 785 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="wax-drip">
            <path d="M299.706 180.392C317.243 177.567 290.54 104.591 274.997 68.4552L260.002 68.8172C261.893 78.1076 267.745 99.5393 276.023 110.943C284.3 122.346 270.231 147.26 262.162 158.291C251.514 193.725 237.106 264.027 264.659 261.761C299.101 258.929 278.641 219.411 278.497 213.413C278.352 207.415 277.785 183.922 299.706 180.392Z" fill="#BCBCBC"/>
            <path d="M293.342 101.022C294.026 96.2041 287.086 90.5032 283.531 88.255L284.134 113.248L303.618 153.789L298.528 129.405C297.781 126.089 295.383 119.278 291.765 118.565C287.242 117.674 292.487 107.044 293.342 101.022Z" fill="#BCBCBC"/>
            <path d="M286.517 196.214C289.288 194.947 288.819 187.99 288.239 184.669L283.74 184.778L280.065 194.884C279.572 194.859 279.346 195.225 279.519 196.383L280.065 194.884C281.267 194.946 284.061 197.338 286.517 196.214Z" fill="#BCBCBC"/>
            <path d="M248.989 257.638C250.304 262.408 254.535 259.505 256.487 257.457L268.705 245.659L252.732 205.532C251.155 209.238 248.062 219.249 248.313 229.646C248.627 242.642 245.959 235.705 248.639 243.142C251.319 250.58 247.344 251.676 248.989 257.638Z" fill="#BCBCBC"/>
            <path d="M427.981 172.139C440.862 171.445 430.123 104.98 423.144 71.8349L412.365 70.6346C412.652 78.9435 414.381 98.2614 418.999 109.063C423.616 119.864 410.68 140.209 403.635 149.032C391.941 178.916 373.551 238.885 393.54 239.692C418.527 240.701 408.416 204.103 409.001 198.847C409.586 193.591 411.879 173.007 427.981 172.139Z" fill="#BCBCBC"/>
            <path d="M432.539 102.146C433.582 98.0051 429.268 92.3221 426.98 89.9982L424.542 111.897L433.837 149.291L432.993 127.47C432.839 124.497 431.904 118.303 429.395 117.315C426.259 116.079 431.235 107.321 432.539 102.146Z" fill="#BCBCBC"/>
            <path d="M386.126 244.89C389.029 246.934 396.699 239.869 399.14 237.856L394.023 237.226L387.429 235.764C387.65 235.176 387.554 235.031 386.79 235.623L387.429 235.764C386.782 237.483 383.423 242.987 386.126 244.89Z" fill="#BCBCBC"/>
            <path d="M413.11 190.202C409.69 195.09 403.096 187.766 400.95 185.817L406.397 182.026L413.543 176.087C413.428 175.252 413.556 174.964 414.235 175.512L413.543 176.087C413.879 178.529 416.296 185.649 413.11 190.202Z" fill="#BCBCBC"/>
            <path d="M425.149 175.971C429.443 175.213 431.782 170.278 432.445 165.194L425.442 164.22L417.83 171.803C417.747 171.87 417.661 171.956 417.571 172.061L417.83 171.803C419.587 170.366 419.888 176.898 425.149 175.971Z" fill="#BCBCBC"/>
            <path d="M219.769 171.99C205.834 211.391 84.2427 122.27 25.1887 72.7843L39 67C55.2287 74.8662 86.2363 67.7678 103.196 91.1661C120.157 114.564 173.189 91.491 197.585 77.0295C268.359 65.8166 405.437 59.0715 387.557 121.795C365.207 200.198 302.346 138.094 291.333 135.499C280.32 132.904 237.186 122.74 219.769 171.99Z" fill="#BCBCBC"/>
            <path d="M76.2556 127.389C67.0122 127.151 59.9257 108.99 57.5379 99.9385L103.425 110.751L168.663 170.991L126.13 150.055C120.373 147.081 108.979 138.98 109.459 130.363C110.06 119.591 87.8099 127.686 76.2556 127.389Z" fill="#BCBCBC"/>
            <path d="M255.564 147.523C251.845 153.437 239.22 149.735 233.373 147.144L235.809 136.805L256.313 132.132C256.511 130.986 257.299 130.603 259.354 131.439L256.313 132.132C255.828 134.931 258.861 142.278 255.564 147.523Z" fill="#BCBCBC"/>
            <path d="M387.725 84.0817C395.886 88.9149 388.418 97.5838 383.665 101.314L355.789 125.061L289.573 73.0793C297.206 70.8357 317.243 67.4732 336.332 71.9713C360.193 77.594 348.698 68.8223 361.111 77.8103C373.523 86.7982 377.525 78.0402 387.725 84.0817Z" fill="#BCBCBC"/>
            <path d="M138.886 65H119.242C119.242 86 128.996 90.4761 126.742 97.5C125.213 102.261 119.686 123.347 110.95 136C100.619 150.964 86.0251 146 79.9104 157.09C42.7418 224.5 104.057 221.915 108.242 221C124.242 217.5 122.1 188.837 131.348 200.5C143.242 215.5 152.242 191 143.242 179C137.694 171.603 131.348 149 138.886 126.036C142.779 114.177 144.059 85.8808 138.886 65Z" fill="#BCBCBC"/>
            <path d="M707.519 71.2268L723.58 71.7512C718.012 91.2 708.509 92.9644 708.569 100.02C708.609 104.802 707.73 125.68 711.823 139.53C716.663 155.91 730.421 154.876 732.694 166.639C746.507 238.142 694.918 220.782 691.593 218.912C678.881 211.766 688.307 185.743 677.33 194.287C663.213 205.276 662.036 180.389 672.891 171.472C679.582 165.975 690.986 146.591 690.648 123.484C690.474 111.55 697.571 89.3024 707.519 71.2268Z" fill="#BCBCBC"/>
            <path d="M490.579 100.811C484.605 95.785 488.09 76.8428 490.579 68C488.422 68 483.41 68.2792 480.622 69.3962C477.137 70.7925 474.15 123.151 474.15 138.51C474.15 153.868 480.622 151.774 484.107 158.755C487.592 165.736 468.176 200.642 474.15 216.699C480.124 232.755 495.558 199.246 494.064 191.566C492.571 183.887 499.541 163.642 510.991 151.774C522.442 139.906 498.047 107.094 490.579 100.811Z" fill="#BCBCBC"/>
            <path d="M655.398 119.159C661.312 107.21 683.597 114.18 694 119.159C694 114.844 693.671 104.82 692.357 99.2445C690.715 92.2746 629.116 86.3003 611.048 86.3003C592.979 86.3003 595.443 99.2445 587.229 106.214C579.016 113.184 537.951 74.3519 519.061 86.3003C500.17 98.2488 539.593 129.116 548.628 126.128C557.662 123.141 581.48 137.081 595.443 159.982C609.405 182.884 648.007 134.094 655.398 119.159Z" fill="#BCBCBC"/>
            <path d="M769 65H31.0001L28.0001 69C-13.9999 125 -4.99999 235 31.0001 223C54.4692 215.177 15.5 305.5 64.5 297.5C113.5 289.5 59.5 222.5 52.5 199.5C19.3261 90.5 105.5 190.886 105.5 156C105.5 129 171.5 113 171.5 156C165 322 214 282 214 242C214 216.867 214 193 194.5 163C183.442 145.988 172.28 95.5659 221.603 102.102C224.783 102.523 227.91 100.856 229.633 98.1504C245.25 73.6304 256.178 132.451 257.388 179.083C257.524 184.314 260.297 189.163 264.676 192.03C353.335 250.083 302.834 299.489 324.5 315C368.5 346.5 334.517 210.97 328.5 132C324.5 79.5 370.5 88.7051 370.5 152C370.5 195.5 427.5 127.5 442 225C451.723 290.379 480 242 480 229C447.5 176.5 476.943 89.8019 540 103C561.5 107.5 521.5 138.5 521.5 144.5C494.833 189.5 559.438 207.168 589 172C618 137.5 602.879 110.737 619 113C647.5 117 581.032 269.176 619 250C667.328 225.592 634.951 203.408 661 170.42C662.256 168.828 663.117 166.911 663.342 164.896C666.479 136.749 666.673 146.941 695 129C725 110 693.932 200.232 758 180C796 168 787.667 105 769 65Z" fill="#C6C6C6"/>
            </g>
          </svg> */}

          </div>
          <DemoBtn
             toggleValue={sadness}
             setToggleValue={setSadness}
             style={{
              position: "absolute",
              right: "0",
              bottom: "5em"}}/>
        </section>
        </>
        ) : (
          <>
          <section 
          className={"p-relative"}
          id={sadObj.title}
          >
            <h1 
              className={"allFontsProps emotionTitle"}
              style={{fontFamily: sadObj.emotionProps.realFontFamily}}
            >
              {sadObj.title}
            </h1>
            <p
              className="section-text">
              {sadObj.emotionProps.text_description}
            </p>
            <DemoBtn
             toggleValue={sadness}
             setToggleValue={setSadness}
             style={{
              position: "absolute",
              right: "0",
              bottom: "5em"}}
             />
          </section>
          </>
        )
        }

        {/* <DemoBtn
         toggleValue={sadness}
         setToggleValue={setSadness}
         style={{
          position: "absolute",
          right: "0",
          bottom: "5em"}}
         /> */}
      {/* </section> */}
    </>
  )
}
