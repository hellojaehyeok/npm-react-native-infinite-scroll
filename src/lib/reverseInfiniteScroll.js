import React, { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';

const R_InfiniteScroll = ({children, onScrollEnd}) => {
    const chatScrollRef = useRef();
    const chatContentRef = useRef();
    const [totalChatHeight, setTotalChatHeight] = useState(0);

    const onScrollChat = async e => {
        if(e.nativeEvent.contentOffset.y == 0){
            setTotalChatHeight(e.nativeEvent.contentSize.height);
            onScrollEnd();
        }
    }

    const onChangeChatSize = (e) => {
        chatContentRef.current.measure((x, y, width, height) => {
            chatScrollRef.current.scrollTo({x:0, y:height - totalChatHeight, animated: false});
        })
    }

    return(
        <ScrollView
            onScroll={onScrollChat}
            ref={chatScrollRef}
            onContentSizeChange={onChangeChatSize}
        >
            <View ref={chatContentRef}>
                {children}
            </View>
        </ScrollView>
    )
};

export default R_InfiniteScroll;