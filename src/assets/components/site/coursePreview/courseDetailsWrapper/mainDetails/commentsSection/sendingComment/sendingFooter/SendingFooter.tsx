import RegisterCommentBtn from "./RegisterCommentBtn";

type SendingFooterProps = {
  cancelClickHandler: () => void;
};

const SendingFooter = ({ cancelClickHandler }: SendingFooterProps) => {
  return (
    <div
      className="flex sm:flex-row flex-col justify-end items-center mt-7"
    >
      
      <div className="flex items-center">
        <RegisterCommentBtn/>

        <button
          type="button"
          className="w-24 h-10 border border-gray-300 text-gray-500 text-sm font-bold rounded-md transition duration-200 hover:bg-gray-500 hover:text-white"
          onClick={cancelClickHandler}
        >
          انصراف
        </button>
      </div>
    </div>
  );
};

export default SendingFooter;
