//get data from carData

// fetchData(carData);
// let products = null;
// fetch('buycar.js')
// .then (response => response.j)

// window.onload = function() {
//     // Accessing JSON data from external JS file
//     const dataList = document.getElementById('data-container');
//     carData.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item.name + ' - ' + item.age;
//         dataList.appendChild(listItem);
//     });
// }

fetchData(carData);


    // Fetch all data from json file
    function fetchData(data) {
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = '';
        var dataHtml = "";
        data.forEach(item => {
            dataHtml += `<!-- list-group-item -->
            <div class="list-group-item car-listing-item container-fluid no-h-padding">
                <div class="car-row">
                    <div class="display-car-style">

                        <!-- car image wapper -->
                        <div class="car-listing-item-img car-listing-item-img-left column-4">
                            <div class="image-wrapper">
                                <a class="car-view-detail-link" aria-hidden="true" href="">
                                    <div class="car-image-container" 
                                        title="${item.Year} ${item.Name} ${item.Trim}"
                                        style="padding-top: 67%; background-image: url(${item.image_1})"
                                        data-loaded="true"
                                    >
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- car image wapper ends -->
                        
                        <!-- car-listing-item-info -->
                        <div class="car-listing-item-info left column-12">
                            <div class="car-row">
                                <div class="column-small-7">
                                    <div class="car-listing-item-title">
                                        <a href="">${item.Year} ${item.Name} ${item.Trim}</a>
                                    </div>
                                    <div class="car-listing-item-field-container">
                                        <div class="car-listing-item-field car-field-drivetrain ">
                                            <span class="car-listing-item-field-label">Drivetrain</span>
                                            <span class="car-listing-item-field-value">${item.Drivetrain}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-transmission ">
                                            <span class="car-listing-item-field-label">Transmission</span>
                                            <span class="car-listing-item-field-value">${item.Transmission}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-engine ">
                                            <span class="car-listing-item-field-label">Engine</span>
                                            <span class="car-listing-item-field-value">${item.Engine}</span>
                                        </div>
                                            <div class="car-listing-item-field car-field-mileage ">
                                            <span class="car-listing-item-field-label">Mileage</span>
                                            <span class="car-listing-item-field-value">${item.Mileage}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-door ">
                                            <span class="car-listing-item-field-label">Doors</span>
                                            <span class="car-listing-item-field-value">${item.Doors}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-vin ">
                                            <span class="car-listing-item-field-label">VIN</span>
                                            <span class="car-listing-item-field-value">${item.VIN}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-stock-number ">
                                            <span class="car-listing-item-field-label">Stock Number</span>
                                            <span class="car-listing-item-field-value">${item.Stock_Number}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-transmission-details ">
                                            <span class="car-listing-item-field-label">Transmission Detail</span>
                                            <span class="car-listing-item-field-value">${item.Transmission_Detail}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-mpg ">
                                            <span class="car-listing-item-field-label">MPG (city/hwy)</span>
                                            <span class="car-listing-item-field-value">${item.MPG}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-bodytype ">
                                            <span class="car-listing-item-field-label">Body Type</span>
                                            <span class="car-listing-item-field-value">${item.Body_Type}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-trim ">
                                            <span class="car-listing-item-field-label">Trim</span>
                                            <span class="car-listing-item-field-value">${item.Trim}</span>
                                        </div>
                                        <div class="car-listing-item-field car-field-fueltype ">
                                            <span class="car-listing-item-field-label">Fuel Type</span>
                                            <span class="car-listing-item-field-value">${item.Fuel_Type}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- car-price -->
                                <div class="car-price-wrapper">
                                    <div class="pull-right car-price">
                                        <span class="car-price-value">${(parseFloat(item.Price)).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}</span>
                                    </div>
                                </div>
                                <!-- car-price -->
                            </div>
                        </div>
                        <!-- car-listing-item-info ends -->
                    </div>
                </div>

                <!-- button row -->
                <div class="car-row">
                    <div class="car-listing-item-buttons column-12">
                        <button type="button" class="btn btn-apply-online">APPLY ONLINE</button>
                        <button type="button" class="btn btn-check-availability">CHECK AVAILABILITY</button>
                        <button type="button" class="btn btn-test-drive">TEST DRIVE</button>
                    </div>
                </div>
            </div>
            <!-- list-group-item ends-->
            `;
        });
        dataContainer.innerHTML = dataHtml;

        items = $(".list-group-item.car-listing-item");
        numItems = items.length;
        numPages = Math.ceil(numItems / itemsPerPage);
        
        items.hide();
        startIndex = 1;
        endIndex = Math.min(startIndex + itemsPerPage, numItems);
        items.slice(startIndex, endIndex).show();
    }
