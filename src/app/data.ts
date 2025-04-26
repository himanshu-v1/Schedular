export interface Data {
    dataFormat: {
        year1: {
            month1: {
                day1: [
                    {
                        task: String;
                        taskedQty: String;
                        compQyt: String;
                        metric: String;
                        remTime: String;
                        done: boolean;
                    },
                    {
                        task: String;
                        taskedQty: String;
                        compQyt: String;
                        metric: String;
                        remTime: String;
                        done: boolean;
                    }
                ];
                day2: [
                    {
                        task: String;
                        taskedQty: String;
                        compQyt: String;
                        metric: String;
                        remTime: String;
                        done: boolean;
                    },
                    {
                        task: String;
                        taskedQty: String;
                        compQyt: String;
                        metric: String;
                        remTime: String;
                        done: boolean;
                    }
                ];
            };
        };
    };

    taskStructure: {
        task: String;
        taskedQty: String;
        compQyt: String;
        metric: String;
        remTime: String;
        done: boolean;
        notificationId: any;
    };

    inDateArrayStruct: {
        dateOfMonth: any;
        dayOfMonth: any;
        row: any;
        isToday: boolean;
        disabled: boolean;
        completed: boolean;
    };
}
