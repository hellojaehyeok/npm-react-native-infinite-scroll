import React, { useState } from 'react';
import { ScrollView } from 'react-native';

const InfiniteScroll = ({children, onScrollEnd, endPoint}) => {
    
    const [isUpdateList, setIsUpdateList] = useState(true);

    const onScrollList = (e) => {
        if(!isUpdateList){return}
        let updateScroll = e.nativeEvent.contentOffset.y;
        if(updateScroll == 0){return}
        let screenHeight = e.nativeEvent.layoutMeasurement.height;
        let documentHeight = e.nativeEvent.contentSize.height;

        let _endPoint = endPoint??0;
        
        if (screenHeight + updateScroll + _endPoint >= documentHeight) {
            if(!isUpdateList){return};
            setIsUpdateList(false);
            onScrollEnd();
        }
    };


    return (
        <ScrollView
            onScroll={onScrollList}
            onContentSizeChange={() => setIsUpdateList(true)}
            scrollEventThrottle={1}
        >
            {children}
        </ScrollView>
    )
};

export default InfiniteScroll;