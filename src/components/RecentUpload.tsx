import {
    Text,
    Image,
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    recentsCard: {
        paddingRight: 31,
    },
    title: {
        fontFamily: 'DMSans-Regular',
        fontSize: 11.33,
        fontWeight: '100',
        paddingTop: 9,
    },
    artist: {
        fontFamily: 'DMSans-Regular',
        fontSize: 11.33,
        color: '#484848',
        fontWeight: '200',
    },
});

type RecentUploadProps = {
    title: string;
    artist: string;
    children: never[];
    // image: string;
    // pressFunction: (event: GestureResponderEvent) => void;
};

function RecentUpload({
    title,
    artist,
}: RecentUploadProps) {
    return (
        <View style={styles.recentsCard}>
            <Image
                style={{
                    height: 148,
                    width: 148,
                    backgroundColor: 'black',
                }}
            />
            <View style={{ width: 148 }}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
            </View>
        </View>
    );
}

export default RecentUpload;
