'use client'
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { hidePopUp } from '@clean/application/redux/popUpNotifications/popUpNotification.slice';
import { useEffect } from 'react';
import SVGCheck from '@components/Atoms/svg/SVGCheck';
import SVGAlertSolid from '@components/Atoms/svg/SVGAlertSolid';
import SVGX from '@components/Atoms/svg/SVGX';
import PopUpConfirmation from '@/app/components/Molecule/PopUpNotification/popUpConfirmation';
interface PopUpNotificationsProps {
}

const PopUpNotifications: React.FC<PopUpNotificationsProps> = () => {

  const dispatch = useAppDispatch();

  const { popUpNotificationType, popUpProps, isOpen } = useAppSelector(
    (state) => state.PopUpNotifications
  );
  
  useEffect(() => {
    let timer;
    if (popUpNotificationType !== 'QUESTION') {
      // Set the timer only for non-QUESTION type pop-ups
      timer = setTimeout(() => {
        dispatch(hidePopUp());
      }, 5000);
    }

    return () => {
      // Clear the timer when the component unmounts or when popUpNotificationType changes
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [popUpNotificationType]);

  const translatedText = popUpProps?.text?.split('<br />').map(line => {
    // Apply translation to each line
    return line;
  }).join('<br />');

  if(popUpNotificationType === 'QUESTION'){
    return (
    <PopUpConfirmation
    title={popUpProps?.title}
    subtitle={popUpProps?.subtitle}
    isOpen={isOpen}
    actionClose={()=>{dispatch(hidePopUp())}}
    textActionClose={popUpProps?.textActionClose}
    textActionConfirmation={popUpProps?.textActionConfirmation}
    actionConfirmation={popUpProps?.actionConfirmation}
    />
    )
  }

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed z-[9991] overflow-y-auto top-[10%] right-[2.6%] md:right-[5%] p-[20px] w-min-[227px] w-auto h-min-[65px] h-auto bg-white rounded-xl`}>
      <div className="w-[315px] flex container mx-auto h-full">
        <div className="flex justify-center items-center relative">
          {popUpNotificationType === 'ERROR' && (
            <SVGAlertSolid  className="text-[#FFA800] h-[23px]" />
          )}
          {popUpNotificationType === 'SUCCESS' && (
            <SVGCheck
              className="h-[23px] w-[23px]"
            />
          )}
        </div>
        <div className="w-full mx-[20px] flex justify-start items-center">
          <span className="text-[13px] font-normal text-black" dangerouslySetInnerHTML={{ __html: translatedText || '' }} />
        </div>
        <div className="w-auto h-full flex justify-center items-start">
          <SVGX
            className="h-[14px] w-[14px]"
            variant="bold"
            onClick={() => {
              dispatch(hidePopUp());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUpNotifications;
