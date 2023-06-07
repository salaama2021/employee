
let tbody = document.getElementById("tbody")
tbody.append(td_fun());

// fetch function
fetch("https://localhost:3000/profile")
.then(res=>console.log(res.json))
.then(json => {
    json.map(data=>{
        console.log(data)
        tbody.append(td_fun(data));
    })
})


// create td
function td_fun() {
    let td = document.createElement('tr')
    td.innerHTML =''
    <

    <tr>
            <td class="px-6 py4 whitespace-nowrap">
                <div class="flex items-center">
                    <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                        Thomas
                    </span>
                </div>
            </td>

            <td class="px-6 py4 whitespace-nowrap">
                <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                    Cooks
                </span>
            </td>
        <td class="px-6 py4 whitespace-nowrap">
                <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                tCo0ks@gmail.com
                </span>
            </td>
                                        
                                        <td class="px-6 py4 whitespace-nowrap">
                                            <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                                            Been part of the team for quite a long time
                                            </span>
                                        </td>  
                                            

                                         <><td class="px-6 py4 whitespace-nowrap">
                                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" class="h-10 w-10 rounded-full" alt=""></img>
                                                </td><td class="px-6 py4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                                                        </span>
                                                    </td></>
                                                
                                                    
                                                 <td class="px-6 py4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                                                          22 May 2001
                                                        </span>
                                                        </td>

                                                        <td class="px-6 py4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                                                          Manager 
                                                        </span>
                                                        </td>
                                                

                                                        <td class="px-6 py4 whitespace-nowrap">
                                                            <span class="px-2 inline-flex-xs leading-5 font-semibold ">
                                                            0787754321
                                                            </span>
                                                        </td>
                                                        

                                                        <td class="px-6 py4">
                                                        <span class="px-2">
                                                        007896
                                                    </span>
                                                </td>                                
                            

                        

                    
                    </tr>
                    ''
                    return td;
}

