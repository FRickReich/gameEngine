const camelCaseString = (str) =>
{
    const newString = str.replace(/\s(.)/g, function(a)
    {
        return a.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function(b)
    {
        return b.toLowerCase();
    });

    return newString;
}

export { camelCaseString };
