

exports.get_homeData = function(req, res){
    //console.log("Hello")
    data = [
        { 'name': 'Mike', 'email': 'mike@gmail.com' },
        { 'name': 'Donzen', 'email': 'Donzen@gmail.com' }
    ];

    res.send(JSON.stringify(data));
};