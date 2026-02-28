import { toast, Slide } from 'react-toastify';
import TOASTER_TYPE from './toaster_types.component';
import TOASTER_POSITION from './toaster_positions.component'; 

export const handleNotify = (messageText, action = TOASTER_TYPE.INFO, position = TOASTER_POSITION.TOP_RIGHT) => {
    toast.dismiss();

    const options = {
        autoClose: 3000, 
        limit: 1,
        transition: Slide,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        position: position, 
    };

    switch (action) {
        case TOASTER_TYPE.SUCCESS:
            toast.success(messageText, {
                ...options,
                autoClose: 1000, 
            });
            break;

        case TOASTER_TYPE.INFO:
            toast.info(messageText, options);
            break;

        case TOASTER_TYPE.ERROR:
            toast.error(messageText, options);
            break;

        default:
            console.error('Invalid notification type');
            break;
    }
};

export { TOASTER_TYPE, TOASTER_POSITION };
