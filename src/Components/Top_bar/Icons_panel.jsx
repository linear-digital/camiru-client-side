import React from 'react';
import { Calendar, Envelope, Notification, Task } from '../../util/icons';

const Icons_panel = () => {
    return (
        <div className='flex items-center gap-5'>
            <button>
                <Calendar />
            </button>
            <button>
                <Task />
            </button>
            <button>
                <Envelope />
            </button>
            <button>
                <Notification />
            </button>
        </div>
    );
};

export default Icons_panel;