import { memo } from "react";

const Left = memo(() => {
  return (
    <div className="col-span-6 xl:-top-3.5 xl:left-36 z-negative">
      <img
        src="/public/image/landing/monitoring.png"
        alt="roocket"
        className="mx-auto mb-4 md:mb-6"
      />

      <div className="absolute -bottom-5 left-0 xl:left-1/2 xl:-bottom-20 w-12 h-16 sm:w-24 sm:h-32">
        <svg
          className="text-gray-920 dark:text-gray-930"
          width="currentWidth"
          height="currentHeight"
          viewBox="0 0 98 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.029 72.7354C50.0557 71.6329 52.8873 70.0549 55.4172 68.061C57.918 66.0579 60.1214 63.7096 61.9613 61.0864C63.8091 58.5597 65.3461 55.8197 66.5391 52.9257C67.7364 50.0386 68.4208 46.9647 68.5614 43.8423C68.6206 42.2624 68.4539 40.6823 68.0664 39.1495C67.6842 37.5558 66.9595 36.0643 65.9428 34.7789C64.7806 33.3631 63.1784 32.3767 61.3909 31.9766C59.5532 31.6118 57.6498 31.7712 55.8983 32.4365C55.0759 32.7319 54.2792 33.094 53.5159 33.5193C52.8228 33.9419 52.1521 34.4002 51.5067 34.8924C50.8464 35.3833 50.2154 35.9122 49.6168 36.4767L48.7047 37.3268L47.9174 38.176C45.9117 40.3826 44.1355 42.7873 42.6161 45.3531C41.0832 47.8361 39.9117 50.5248 39.1369 53.3382C38.4021 56.0043 38.062 58.7636 38.1276 61.5283L38.1352 62.5269L38.2181 63.5108C38.2949 64.1638 38.3506 64.8288 38.426 65.4547C38.6641 66.713 38.8388 68.0071 39.1613 69.2176C39.3611 69.9404 39.5715 70.6571 39.797 71.3514C39.1183 71.4567 38.4336 71.5514 37.7521 71.6025C35.0578 71.8377 32.3439 71.7042 29.6857 71.2059C27.1472 70.7067 24.7021 69.8151 22.4382 68.5631C18.1815 66.0403 14.5592 62.5759 11.8492 58.4358C9.29381 54.5665 7.28986 50.3601 5.89515 45.9379C4.59231 41.9013 3.61834 37.7659 2.98278 33.5722C2.37826 29.925 2.02126 26.2411 1.91425 22.5457C1.70973 17.104 2.3983 11.6657 3.9526 6.44679C5.16315 2.72557 6.29982 0.745502 6.07447 0.691869C5.84913 0.638235 5.6891 1.11877 5.13313 2.03216C4.35997 3.37851 3.68579 4.77932 3.11593 6.22352C1.15449 11.494 0.148942 17.0721 0.146538 22.6957C0.0827322 30.8741 1.20309 39.0187 3.47277 46.8761C4.84019 51.5314 6.86593 55.9674 9.48854 60.0495C12.359 64.5675 16.2315 68.3638 20.8056 71.144C23.3087 72.5646 26.0167 73.5892 28.8333 74.1813C31.7991 74.7897 34.8346 74.9853 37.8539 74.7626C38.8963 74.7008 39.9342 74.5788 40.9626 74.3974C42.0487 77.0395 43.365 79.5811 44.8961 81.9928C49.0382 88.373 54.1048 94.1027 59.9301 98.9944C64.1151 102.568 68.5796 105.8 73.2808 108.66C78.4719 111.87 83.9951 114.51 89.7538 116.532C90.4657 116.756 91.0559 116.938 91.5846 117.085L89.8096 117.517C87.9185 118.016 86.1129 118.591 84.4109 119.178C81.4044 120.241 78.4811 121.526 75.6654 123.024C70.8732 125.609 68.3039 127.814 68.5339 128.171C68.7639 128.529 71.7657 127.137 76.6077 125.207C79.0452 124.246 81.9645 123.152 85.2533 122.17C86.8948 121.673 88.6234 121.183 90.4314 120.76C91.3377 120.539 92.2605 120.324 93.2012 120.14C93.6785 120.024 94.0938 119.97 94.7849 119.788C95.6863 119.554 96.4869 119.033 97.0653 118.303C97.3671 117.906 97.5841 117.452 97.7028 116.967C97.7854 116.588 97.8184 116.199 97.8012 115.811C97.7666 115.238 97.6738 114.67 97.5245 114.115C97.2833 113.221 97.0481 112.337 96.8248 111.474C96.3407 109.756 95.8652 108.103 95.4151 106.519C94.4514 103.387 93.4861 100.645 92.63 98.3437C90.8863 93.7582 89.4203 90.9936 88.9623 91.169C88.5044 91.3445 89.0609 94.3727 90.2022 99.1736C90.8155 101.613 91.4858 104.423 92.2553 107.582L93.4801 112.53C93.6928 113.399 93.9055 114.268 94.1136 115.153L94.1554 115.227C93.4908 114.864 92.5499 114.408 91.1826 113.788C85.8335 111.319 80.6587 108.489 75.6942 105.317C71.2264 102.459 66.9737 99.2775 62.9701 95.7986C57.4752 91.1225 52.6808 85.6811 48.7339 79.6412C47.4482 77.6274 46.327 75.5132 45.3812 73.3191C45.9369 73.1441 46.4926 72.9692 47.0409 72.7565L47.029 72.7354ZM43.4862 67.8998C43.1601 66.8307 43.0267 65.7082 42.7956 64.5853C42.7124 64.0195 42.6833 63.4509 42.6107 62.8791L42.5228 62.0095L42.5221 61.1462C42.4528 58.7661 42.7319 56.3886 43.3504 54.0892C44.0065 51.6603 45.0047 49.337 46.315 47.1891C47.665 44.8794 49.2338 42.7048 50.9997 40.6951L51.6783 39.9492L52.3986 39.2772C52.8665 38.8172 53.3632 38.3874 53.8856 37.9904C54.3858 37.6017 54.9076 37.2415 55.4484 36.9115C55.9708 36.6141 56.5172 36.361 57.0819 36.1548C58.0155 35.7022 59.0732 35.5735 60.0881 35.7891C61.1029 36.0046 62.017 36.5521 62.6861 37.3451C64.0769 39.295 64.7488 41.6667 64.5873 44.0563C64.4873 46.7312 63.924 49.3685 62.9226 51.8509C61.88 54.4673 60.5227 56.9469 58.8806 59.2351C57.2951 61.5697 55.386 63.6671 53.2105 65.4645C51.0022 67.2219 48.5304 68.6198 45.8864 69.6068C45.3169 69.8314 44.7296 70.0243 44.1633 70.2053C43.902 69.4477 43.6558 68.6676 43.4234 67.8379"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
});

export default Left;
