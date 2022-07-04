// import React from "react"

const data = ([
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-17.jpg",
        name: "Tbar 3/4 Baseball Tee",
        quality: "1+",
        price: "$54.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-20.jpg",
        name: "Drop Shoulder Pullover Fleece",
        quality: "1",
        price: "$55.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-22.jpg",
        name: "Tbar Collab Movie And Tv T-Shirt",
        quality: "1",
        price: "$77.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-24.jpg",
        name: "Essential Longline Curved Hem",
        quality: "1+",
        price: "$66.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-15.jpg",
        name: "91 Short Sleeve Shirt",
        quality: "1",
        price: "$57.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-09.jpg",
        name: "Festival Shirt Young",
        quality: "1+",
        price: "$44.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-27.jpg",
        name: "Graduate Tee",
        quality: "1+",
        price: "$51.00"
    },
    {
        image: "https://themes.the4.co/kalles-html/assets/images/home-fashion-trend/pr-26.jpg",
        name: "Tbar Collab Movie And Tv",
        quality: "1",
        price: "$51.00"
    }
])

const getAmountOrder = () => {
    if (!localStorage.getItem("product-info")) document.getElementsByClassName("amount-order")[0].innerHTML = 0
    else {
        document.getElementsByClassName("amount-order")[0].innerHTML = JSON.parse(localStorage.getItem("product-info")).length
    }
}

const Product = () => {
    var productList = document.getElementsByClassName("main-product")
    var ul = document.createElement("ul")
    ul.setAttribute("class", "product-list")
    for (let index = 0; index < data.length; index++) {
        let card = document.createElement("li")
        card.setAttribute("class", "product-list-item")

        let image = document.createElement("img")
        image.setAttribute("src", data[index].image)
        image.setAttribute("alt", "product")
        card.appendChild(image)

        let name = document.createElement("p")
        name.appendChild(document.createTextNode(data[index].name))
        card.appendChild(name)

        let price = document.createElement("p")
        price.setAttribute("class", "price")
        price.appendChild(document.createTextNode(data[index].price))
        card.appendChild(price)

        let btn = document.createElement("button")
        btn.setAttribute('id','btn')
        btn.appendChild(document.createTextNode("Add to Cart"))
        btn.onclick = () => {
            var sta = true
            var productInfo = []
            productInfo = JSON.parse(localStorage.getItem("product-info"))
            console.log(productInfo)
            if (!productInfo) {
                productInfo = []
            }
            else {
                productInfo.forEach(element => {
                    if (element.name == data[index].name) {
                        sta = false
                    }
                });
            }
            if (sta) {
                productInfo.push(data[index])
            }

            localStorage.setItem("product-info", JSON.stringify(productInfo))
            getAmountOrder()
            btn.disabled = true
        }
        card.appendChild(btn)

        ul.appendChild(card)
        if ((index + 1) % 4 === 0) {
            productList[0].appendChild(ul)
            ul = document.createElement("ul")
            ul.setAttribute("class", "product-list")
        }

    }
}
const Cart = () => {
    getAmountOrder()
    var cart = document.getElementsByClassName("main-cart")
    var productList = JSON.parse(localStorage.getItem("product-info"))

    var table = document.createElement("table")

    var header_table = document.createElement("tr")

    var header_data1 = document.createElement("th")
    header_table.appendChild(header_data1)

    header_data1 = document.createElement("th")
    header_data1.appendChild(document.createTextNode("Product"))
    header_table.appendChild(header_data1)

    header_data1 = document.createElement("th")
    header_data1.appendChild(document.createTextNode("Quality"))
    header_table.appendChild(header_data1)

    header_data1 = document.createElement("th")
    header_data1.appendChild(document.createTextNode("Action"))
    header_table.appendChild(header_data1)

    table.appendChild(header_table)

    if (localStorage.getItem("product-info")) {
        for (let index = 0; index < productList.length; index++) {

            // console.log(data[index].quality)
            var trow = document.createElement("tr")

            var tdata = document.createElement("td")
            tdata.appendChild(document.createTextNode(index + 1))
            trow.appendChild(tdata)

            tdata = document.createElement("td")
            tdata.setAttribute("class", "product-info")
            var image = document.createElement("img")
            image.setAttribute("src", productList[index].image)
            image.setAttribute("alt", "product")
            tdata.appendChild(image)

            var dv = document.createElement("div")
            var name = document.createElement("p")
            name.appendChild(document.createElement("b").appendChild(document.createTextNode(productList[index].name)))
            dv.appendChild(name)

            var price = document.createElement("p")
            price.setAttribute("class", "price")
            price.appendChild(document.createTextNode(productList[index].price))
            dv.appendChild(price)

            tdata.appendChild(dv)
            trow.appendChild(tdata)

            tdata = document.createElement("td")
            // console.log(data[index].name)
            tdata.appendChild(document.createTextNode(data[index].quality))
            trow.appendChild(tdata)

            tdata = document.createElement("td")
            var btn = document.createElement("button")
            btn.innerHTML = "X"
            btn.setAttribute("class", "btn-del")
            btn.setAttribute("title", "Delete")
            btn.onclick = () => {
                // console.log(productList)
                productList.splice(index, 1)
                // console.log(productList)
                localStorage.setItem("product-info", JSON.stringify(productList))
                window.location.reload()
            }
            tdata.appendChild(btn)
            trow.appendChild(tdata)

            table.appendChild(trow)
            cart[0].appendChild(table)
        }
    }
}