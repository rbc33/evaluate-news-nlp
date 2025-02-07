function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    let url = inputText;
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/gi;

    if(url.match(urlPattern)) {
        return true;
    }
    else {
        alert("Enter a valid url");
    }
}

export { checkForUrl };