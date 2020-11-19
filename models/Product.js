module.exports = {
    get: function (con, category, wanted, order, callback) {
        var query = "SELECT * FROM product"

        //filter by category
        if (category != "0")
            query += " WHERE category="+category;
        //filter by search name
        if (wanted != null)
            query += " WHERE name LIKE '%"+wanted+"%'";
        
        //order results
        if(order == "minP")
            query += " ORDER BY price asc";
        else if(order == "maxP")
            query += " ORDER BY price desc";
        else
            query += " ORDER BY discount desc";

        con.query(query, callback)
    },
}