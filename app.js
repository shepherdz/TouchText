function getMaxLength(strList) {
    return strList.reduce(
        function (pv, cv, index, array) {
            return Math.max(pv, array[index].length);
        },
        0
    );

    // var maxLength = 0;
    // for (str in strList) {
    //     if (strList[str].length > maxLength)
    //         maxLength = strList[str].length;
    // }
    // return maxLength;
}

