import { StyleSheet } from "react-native";

export default StyleSheet.create({ 

    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "flex-start",
        justifyContent: "center",
        // paddingLeft: "5%",
    },

    container2: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },


    header_text: {
        fontSize: 13,
        // marginTop: "5%",
        width: "90%",
        paddingLeft: "15%",
        // // marginBottom: "5%",
        // textAlign: 'left',
        // fontWeight: "500",
        textAlign: "left",
        color: "#525454",
    },

    title_text: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'left',
        fontWeight: "500",
        textAlign: "left",
        color: "#525454",
        paddingLeft: "5%", 
    },
    
    author_text: {
        fontSize: 15,
        // marginBottom: 22,
        textAlign: 'left',
        fontWeight: "500",
        color: "#525454",
        paddingBottom: "5%",
        paddingLeft: "5%",
    },
    audio_container: {
        justifyContent: "space-around",
        flexDirection: "row",
        paddingTop: "5%",
        width: "90%",
        paddingLeft: "10%",
        paddingBottom: "3%",
        alignItems: "center",
    },
});
