import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Project from "./Project";
import projects from "../data/projects.js";
export const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <h1 className={styles.portfolioTitle}>portfolio</h1>
        <div className={styles.projectsWrapper}>
          {projects.map((project) => (
            <Project image={project.image} desc={project.desc} />
          ))}
        </div>
      </Container>
      <svg
        className={styles.portfolioSVG}
        width="899"
        height="307"
        viewBox="0 0 899 307"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="166.154"
          cy="281.17"
          rx="28.6813"
          ry="25.83"
          fill="white"
        />
        <ellipse
          cx="166.154"
          cy="281.043"
          rx="19.6672"
          ry="17.8531"
          fill="#f0a500"
        />
        <path
          d="M22.0781 38.9219H5.27344V115H23.0625V58.0469C23.2969 57.4375 23.5547 56.875 23.8359 56.3594C24.1172 55.8438 24.4453 55.3984 24.8203 55.0234C25.3359 54.5078 25.9219 54.1094 26.5781 53.8281C27.2344 53.5469 27.9844 53.4062 28.8281 53.4062C29.5781 53.4062 30.2812 53.5234 30.9375 53.7578C31.5938 53.9453 32.1797 54.2969 32.6953 54.8125C33.1641 55.3281 33.5391 56.0547 33.8203 56.9922C34.1016 57.9297 34.2422 59.125 34.2422 60.5781V115H51.4688V58.8906C51.4688 58.3281 51.4688 57.8828 51.4688 57.5547C51.4688 57.2266 51.4688 57.0156 51.4688 56.9219C51.7031 56.4062 51.9844 55.9609 52.3125 55.5859C52.6406 55.1641 53.0156 54.7891 53.4375 54.4609C53.9531 54.1328 54.4922 53.875 55.0547 53.6875C55.6641 53.5 56.3438 53.4062 57.0938 53.4062C57.7969 53.4062 58.4766 53.5234 59.1328 53.7578C59.8359 53.9453 60.4453 54.2969 60.9609 54.8125C61.4766 55.375 61.875 56.125 62.1562 57.0625C62.4844 58 62.6484 59.1953 62.6484 60.6484V115H80.4375V60.7188C80.4375 56.5 80.0156 52.9375 79.1719 50.0312C78.375 47.0781 77.25 44.6641 75.7969 42.7891C74.2969 40.9609 72.5391 39.625 70.5234 38.7812C68.5547 37.9375 66.4219 37.5156 64.125 37.5156C62.2969 37.5156 60.6094 37.75 59.0625 38.2188C57.5156 38.6875 56.1328 39.3438 54.9141 40.1875C53.9297 40.8437 53.0156 41.6406 52.1719 42.5781C51.375 43.4688 50.6484 44.4766 49.9922 45.6016C49.5703 44.4297 49.0547 43.3984 48.4453 42.5078C47.8828 41.5703 47.2031 40.7734 46.4062 40.1172C45.375 39.2266 44.1562 38.5703 42.75 38.1484C41.3438 37.7266 39.75 37.5156 37.9688 37.5156C34.3125 37.5156 31.1953 38.4766 28.6172 40.3984C26.0859 42.2734 24.0938 44.8516 22.6406 48.1328L22.0781 38.9219ZM108.422 145.727C112.359 145.727 115.758 145.07 118.617 143.758C121.523 142.445 123.984 140.828 126 138.906C128.016 136.984 129.68 134.898 130.992 132.648C132.352 130.398 133.453 128.312 134.297 126.391L172.898 38.9219H151.312L133.945 83.6406L131.062 91.2344L128.953 83.5L111.516 38.9219H90.1406L122.344 111.766L117.844 120.133C117.281 121.164 116.789 121.961 116.367 122.523C115.992 123.086 115.383 123.93 114.539 125.055C113.695 126.18 112.664 127.211 111.445 128.148C110.273 129.133 108.914 129.625 107.367 129.625C106.617 129.625 105.609 129.578 104.344 129.484C103.125 129.438 102.117 129.414 101.32 129.414L98.9297 144.32C100.617 144.789 102.141 145.141 103.5 145.375C104.906 145.609 106.547 145.727 108.422 145.727Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M49.7557 295.265H69.3026V259.406C70.1932 260.39 71.1307 261.281 72.1151 262.078C73.0995 262.874 74.1307 263.601 75.2089 264.257C77.037 265.289 79.0057 266.062 81.1151 266.578C83.2714 267.14 85.6151 267.421 88.1464 267.421C92.9276 267.421 97.1698 266.437 100.873 264.468C104.576 262.499 107.693 259.781 110.224 256.312C112.709 252.89 114.584 248.812 115.849 244.078C117.162 239.343 117.818 234.21 117.818 228.679V227.203C117.818 221.437 117.162 216.187 115.849 211.453C114.584 206.671 112.685 202.57 110.154 199.148C107.623 195.773 104.506 193.171 100.803 191.343C97.0995 189.468 92.8339 188.531 88.0057 188.531C85.662 188.531 83.4589 188.789 81.3964 189.304C79.3807 189.773 77.5292 190.453 75.8417 191.343C74.4354 192.093 73.1229 192.984 71.9042 194.015C70.6854 194.999 69.5604 196.124 68.5292 197.39L67.826 189.937H49.7557V295.265ZM98.2714 227.203V228.679C98.2714 231.82 97.9901 234.796 97.4276 237.609C96.8651 240.374 95.9745 242.812 94.7557 244.921C93.537 247.031 91.9432 248.695 89.9745 249.914C88.0526 251.132 85.7089 251.742 82.9432 251.742C81.2089 251.742 79.6385 251.578 78.2323 251.249C76.826 250.874 75.5839 250.359 74.5057 249.703C73.3807 248.999 72.3729 248.156 71.4823 247.171C70.6385 246.187 69.912 245.085 69.3026 243.867V212.085C69.9589 210.773 70.7323 209.624 71.6229 208.64C72.5604 207.656 73.6385 206.835 74.8573 206.179C75.9354 205.617 77.1307 205.195 78.4432 204.914C79.7557 204.585 81.2089 204.421 82.8026 204.421C85.5682 204.421 87.912 205.007 89.8339 206.179C91.8026 207.351 93.4198 208.945 94.6854 210.96C95.9042 213.023 96.7948 215.46 97.3573 218.273C97.9667 221.039 98.2714 224.015 98.2714 227.203ZM128.247 227.273V228.749C128.247 234.328 129.044 239.484 130.638 244.218C132.231 248.906 134.575 252.984 137.669 256.453C140.716 259.921 144.466 262.64 148.919 264.609C153.419 266.531 158.528 267.492 164.247 267.492C169.919 267.492 174.981 266.531 179.434 264.609C183.888 262.64 187.638 259.921 190.684 256.453C193.731 252.984 196.052 248.906 197.645 244.218C199.239 239.484 200.036 234.328 200.036 228.749V227.273C200.036 221.742 199.239 216.632 197.645 211.945C196.052 207.21 193.731 203.109 190.684 199.64C187.591 196.171 183.817 193.453 179.364 191.484C174.911 189.515 169.825 188.531 164.106 188.531C158.388 188.531 153.302 189.515 148.849 191.484C144.442 193.453 140.716 196.171 137.669 199.64C134.575 203.109 132.231 207.21 130.638 211.945C129.044 216.632 128.247 221.742 128.247 227.273ZM147.794 228.749V227.273C147.794 224.179 148.099 221.249 148.708 218.484C149.317 215.718 150.278 213.281 151.591 211.171C152.903 209.062 154.591 207.398 156.653 206.179C158.716 204.96 161.2 204.351 164.106 204.351C167.059 204.351 169.567 204.96 171.63 206.179C173.692 207.398 175.38 209.062 176.692 211.171C177.958 213.281 178.895 215.718 179.505 218.484C180.114 221.249 180.419 224.179 180.419 227.273V228.749C180.419 231.937 180.114 234.937 179.505 237.749C178.895 240.515 177.958 242.929 176.692 244.992C175.38 247.101 173.692 248.765 171.63 249.984C169.567 251.203 167.106 251.812 164.247 251.812C161.294 251.812 158.763 251.203 156.653 249.984C154.591 248.765 152.903 247.101 151.591 244.992C150.278 242.929 149.317 240.515 148.708 237.749C148.099 234.937 147.794 231.937 147.794 228.749ZM266.996 188.531C261.887 188.531 257.176 189.773 252.863 192.257C248.551 194.695 244.848 198.07 241.754 202.382L241.613 200.695L240.84 189.937H222.629V266.015H242.176V220.312C243.066 218.156 244.191 216.281 245.551 214.687C246.91 213.093 248.551 211.781 250.473 210.749C252.066 209.859 253.871 209.203 255.887 208.781C257.949 208.312 260.246 208.078 262.777 208.078C265.215 208.078 267.769 208.242 270.441 208.57C273.16 208.851 275.809 209.296 278.387 209.906L281.269 190.429C279.723 189.96 277.684 189.539 275.152 189.164C272.668 188.742 269.949 188.531 266.996 188.531ZM329.667 171.304H310.12V189.937H292.753V204.351H310.12V238.945C310.12 243.96 310.776 248.273 312.089 251.882C313.401 255.445 315.276 258.374 317.714 260.671C320.104 263.015 322.987 264.749 326.362 265.874C329.784 266.953 333.581 267.492 337.753 267.492C339.909 267.492 342.089 267.374 344.292 267.14C346.542 266.953 348.698 266.671 350.761 266.296C352.823 265.921 354.769 265.453 356.597 264.89C358.425 264.281 360.019 263.578 361.378 262.781L359.479 249.351C358.589 249.585 357.511 249.82 356.245 250.054C355.026 250.289 353.714 250.499 352.308 250.687C350.854 250.921 349.331 251.109 347.737 251.249C346.19 251.39 344.667 251.46 343.167 251.46C341.104 251.46 339.229 251.226 337.542 250.757C335.901 250.289 334.495 249.492 333.323 248.367C332.151 247.289 331.237 245.835 330.581 244.007C329.972 242.132 329.667 239.812 329.667 237.046V204.351H358.073V189.937H329.667V171.304ZM394.166 266.015H413.783V204.351H441.205V189.937H413.783V185.789C413.783 183.539 414.064 181.523 414.627 179.742C415.236 177.96 416.15 176.46 417.369 175.242C418.729 173.789 420.557 172.687 422.854 171.937C425.15 171.187 427.939 170.812 431.221 170.812C434.268 170.812 436.916 170.953 439.166 171.234C441.416 171.515 443.432 171.843 445.213 172.218L446.479 156.89C444.885 156.609 443.338 156.351 441.838 156.117C440.385 155.882 438.932 155.671 437.479 155.484C436.025 155.296 434.525 155.156 432.979 155.062C431.479 154.921 429.908 154.851 428.268 154.851C423.064 154.851 418.354 155.531 414.135 156.89C409.916 158.203 406.33 160.171 403.377 162.796C400.424 165.421 398.15 168.656 396.557 172.499C394.963 176.343 394.166 180.773 394.166 185.789V189.937H374.197V204.351H394.166V266.015ZM454.024 227.273V228.749C454.024 234.328 454.821 239.484 456.415 244.218C458.009 248.906 460.353 252.984 463.446 256.453C466.493 259.921 470.243 262.64 474.696 264.609C479.196 266.531 484.306 267.492 490.024 267.492C495.696 267.492 500.759 266.531 505.212 264.609C509.665 262.64 513.415 259.921 516.462 256.453C519.509 252.984 521.829 248.906 523.423 244.218C525.017 239.484 525.814 234.328 525.814 228.749V227.273C525.814 221.742 525.017 216.632 523.423 211.945C521.829 207.21 519.509 203.109 516.462 199.64C513.368 196.171 509.595 193.453 505.142 191.484C500.689 189.515 495.603 188.531 489.884 188.531C484.165 188.531 479.079 189.515 474.626 191.484C470.22 193.453 466.493 196.171 463.446 199.64C460.353 203.109 458.009 207.21 456.415 211.945C454.821 216.632 454.024 221.742 454.024 227.273ZM473.571 228.749V227.273C473.571 224.179 473.876 221.249 474.485 218.484C475.095 215.718 476.056 213.281 477.368 211.171C478.681 209.062 480.368 207.398 482.431 206.179C484.493 204.96 486.978 204.351 489.884 204.351C492.837 204.351 495.345 204.96 497.407 206.179C499.47 207.398 501.157 209.062 502.47 211.171C503.735 213.281 504.673 215.718 505.282 218.484C505.892 221.249 506.196 224.179 506.196 227.273V228.749C506.196 231.937 505.892 234.937 505.282 237.749C504.673 240.515 503.735 242.929 502.47 244.992C501.157 247.101 499.47 248.765 497.407 249.984C495.345 251.203 492.884 251.812 490.024 251.812C487.071 251.812 484.54 251.203 482.431 249.984C480.368 248.765 478.681 247.101 477.368 244.992C476.056 242.929 475.095 240.515 474.485 237.749C473.876 234.937 473.571 231.937 473.571 228.749ZM542.219 158.015V173.976H565V250.124H542.219V266.015H606.555V250.124H584.758V158.015H542.219ZM624.788 189.937V205.898H646.444V250.124H624.788V266.015H686.804V250.124H666.202V189.937H624.788ZM645.038 170.46C645.038 171.96 645.296 173.367 645.812 174.679C646.374 175.945 647.148 177.023 648.132 177.914C649.116 178.851 650.288 179.578 651.648 180.093C653.054 180.609 654.601 180.867 656.288 180.867C659.757 180.867 662.499 179.906 664.515 177.984C666.577 176.015 667.609 173.507 667.609 170.46C667.609 167.414 666.577 164.929 664.515 163.007C662.499 161.039 659.757 160.054 656.288 160.054C654.601 160.054 653.054 160.312 651.648 160.828C650.288 161.343 649.116 162.046 648.132 162.937C647.148 163.874 646.374 164.999 645.812 166.312C645.296 167.578 645.038 168.96 645.038 170.46ZM698.358 227.273V228.749C698.358 234.328 699.154 239.484 700.748 244.218C702.342 248.906 704.686 252.984 707.779 256.453C710.826 259.921 714.576 262.64 719.029 264.609C723.529 266.531 728.639 267.492 734.358 267.492C740.029 267.492 745.092 266.531 749.545 264.609C753.998 262.64 757.748 259.921 760.795 256.453C763.842 252.984 766.162 248.906 767.756 244.218C769.35 239.484 770.147 234.328 770.147 228.749V227.273C770.147 221.742 769.35 216.632 767.756 211.945C766.162 207.21 763.842 203.109 760.795 199.64C757.701 196.171 753.928 193.453 749.475 191.484C745.022 189.515 739.936 188.531 734.217 188.531C728.498 188.531 723.412 189.515 718.959 191.484C714.553 193.453 710.826 196.171 707.779 199.64C704.686 203.109 702.342 207.21 700.748 211.945C699.154 216.632 698.358 221.742 698.358 227.273ZM717.904 228.749V227.273C717.904 224.179 718.209 221.249 718.819 218.484C719.428 215.718 720.389 213.281 721.701 211.171C723.014 209.062 724.701 207.398 726.764 206.179C728.826 204.96 731.311 204.351 734.217 204.351C737.17 204.351 739.678 204.96 741.74 206.179C743.803 207.398 745.49 209.062 746.803 211.171C748.069 213.281 749.006 215.718 749.615 218.484C750.225 221.249 750.529 224.179 750.529 227.273V228.749C750.529 231.937 750.225 234.937 749.615 237.749C749.006 240.515 748.069 242.929 746.803 244.992C745.49 247.101 743.803 248.765 741.74 249.984C739.678 251.203 737.217 251.812 734.358 251.812C731.404 251.812 728.873 251.203 726.764 249.984C724.701 248.765 723.014 247.101 721.701 244.992C720.389 242.929 719.428 240.515 718.819 237.749C718.209 234.937 717.904 231.937 717.904 228.749Z"
          fill="white"
          fill-opacity="0.6"
        />
      </svg>
    </section>
  );
};
