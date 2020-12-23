async function check()
{ 
    let data= await fetch("http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=7d8f90222829b7d742814ff48c86a297");
    let result=await data.json() 

    var div=document.getElementById("data")
        let main=document.createElement("div")
        let lat=document.createElement("p")
        let long=document.createElement("p") 
        let des=document.createElement("p") 
        let temp=document.createElement("p") 
        let temp_min=document.createElement("p") 
        let temp_max=document.createElement("p") 
        let humidity=document.createElement("p") 
        let country=document.createElement("p")
        let city=document.createElement("p")

        main.setAttribute("class","div")
        lat.setAttribute("class","lat")
        long.setAttribute("class","long")
        des.setAttribute("class","des")
        temp.setAttribute("class","temp")
        temp_min.setAttribute("class","temp_min")
        temp_max.setAttribute("class","temp_max")
        humidity.setAttribute("class","humi")
        country.setAttribute("class","country")
        city.setAttribute("class","city")

        var data1=document.createTextNode("Latitude:"+result.coord.lat)
        var data2=document.createTextNode("Longitude:"+result.coord.lon)
        var data3=document.createTextNode("description:"+result.weather[0].description)
        var data4=document.createTextNode("temperature:"+result.main.temp)
        var data5=document.createTextNode("Min temp:"+result.main.temp_min)
        var data6=document.createTextNode("Max temp:"+result.main.temp_max)
        var data7=document.createTextNode("Humidity:"+result.main.humidity)
        var data8=document.createTextNode("Country:"+result.sys.country)
        var data9=document.createTextNode("city:"+result.name)

         lat.appendChild(data1)
         long.appendChild(data2)
         des.appendChild(data3)
         temp.appendChild(data4)
         temp_min.appendChild(data5) //change appendchild
         temp_max.appendChild(data6)
         humidity.appendChild(data7)
         country.appendChild(data8)
         city.appendChild(data9)


    
        main.appendChild(lat)
        main.appendChild(long)
        main.appendChild(des)
        main.appendChild(temp)
        main.appendChild(temp_min)
        main.appendChild(temp_max)
        main.appendChild(humidity)
        main.appendChild(country)
        main.appendChild(city)

        div.appendChild(main)
   
}
check()
