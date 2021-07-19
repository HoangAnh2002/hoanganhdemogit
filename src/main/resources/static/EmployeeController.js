var app = angular.module("employeeApp", ['kendo.directives']);
app.controller("employeeCtrl", function ($scope, $http) {
    $scope.addEmployee = function () {
        $scope.AddEmployee.center();
        $scope.AddEmployee.open();
    }
    $scope.EditEmployee = function () {
        $scope.editEmployee.center();
        $scope.editEmployee.open();
    }
    $scope.DeleteEmployee = function () {
        $scope.deletepopup.center();
        $scope.deletepopup.open();

        // $http.delete("http://localhost:8085/employee/delete/" + id)
        //     .then(function (res) {
        //         console.log(res);
        //         var grid = $("#grid").data("kendoGrid");
        //         grid.dataSource.read();
        //     })
    }


    $scope.mainGridOptions = {
        dataSource: {
            type: "JSON",
            transport: {
                read: "http://localhost:8085/employee/all",
                type: "GET"
            },

        },
        serverPaging: true,
        selectable: true,
        pageable: {
            pageSizes: true,
            pageSize: 5,
            refresh: true,
            buttonCount: 5,
            messages: {
                display: "{0} - {1} của {2} kết quả",
                itemsPerPage: "kết quả/trang"
            }
        },
        toolbar: [{
            name: "header",
            template:
                '<div id="addEmp">\n' +
                '    <div ng-controller="employeeCtrl">\n' +
                '        <div kendo-window="AddEmployee"\n' +
                '             k-modal="true"\n' +
                '             k-title="\'Add a new employee\'"\n' +
                '             k-width="550"\n' +
                '             k-resizable="true"\n' +
                '             k-height="450"\n' +
                '             k-visible="false">\n' +

                '\n' +
                '            <div ng-controller="Sub-employeeCtrl" style="align-content: center" class="form-group">\n' +
                '<form align="center">\n' +
                '    <div class="form-group" align="center">\n' +
                '        <label for="name">Name of employee:</label>\n' +
                '        <input ng-model="name" type="text" class="form-control col-md-8" id="name" placeholder="Input your name" >\n' +
                '    </div>\n' +
                '    <div class="form-group" align="center">\n' +
                '        <label for="email">Email of employee:</label>\n' +
                '        <input ng-model="email" type="text" class="form-control col-md-8" id="email" placeholder="Input your email">\n' +
                '    </div>\n' +
                '    <div class="form-group" align="center">\n' +
                '        <label for="phone">Number phone:</label>\n' +
                '        <input ng-model="phone" type="text" class="form-control col-md-8"  id="phone" placeholder="Input your phone number">\n' +
                '    </div>\n' +
                '    \n' +
                '    <button id="submitId" type="submit"  class="btn btn-default" ng-click=putEmployee(name,email,phone)>Submit</button>\n' +
                '     <button  id="cancelId" type="cancel"  class="btn btn-default" ng-click = cancel() >Cancel</button>' +
                '</form>' +
                '\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <button class="btn btn-outline-dark" ng-click="addEmployee()">ADD</button>\n' +
                '    </div>\n' +
                '    \n' +
                '\n' +
                '</div>'


        }],
        filterable: true,
        columns: [{
            field: "name",
            title: "Name",
            width: "120px",
            headerAttributes: {
                style: 'font-weight:bold;font-size:120%  '
            }
        }, {
            field: "email",
            title: "Email",
            filterable: false,
            width: "120px",
            headerAttributes: {
                style: "font-weight:bold;font-size:120%"
            }
        }, {
            field: "phone",
            title: "Phone",
            filterable: false,
            width: "120px",
            headerAttributes: {
                style: "font-weight:bold;font-size:120%"
            }
        }, {
            title: "Action",
            filterable: false,
            width: "120px",
            headerAttributes: {
                style: "font-weight:bold;font-size:120%"
            },
            template: function () {
                return (
                    '<div ng-controller="employeeCtrl">\n' +
                    '        <div kendo-window="editEmployee"\n' +
                    '             k-modal="true"\n' +
                    '             k-title="\'Edit-Employee\'"\n' +
                    '             k-width="550"\n' +
                    '             k-resizable="true"\n' +
                    '             k-height="450"\n' +
                    '             k-visible="false">\n' +
                    '\n' +
                    '            <div ng-controller="Popup-edit-ctrl">\n' +
                    '\n' +
                    '                <form align="center" style="align-content:center" class="form-group">\n' +
                    '                    <div class="form-group" align="center">\n' +
                    '                        <label for="name">Name of employee:</label>\n' +
                    '                        <input id="name" type="text"\n' +
                    '                               ng-model="dataItem.name"\n' +
                    '                               class="form-control col-md-8"\n' +
                    '                               placeholder="Input your name">\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group" align="center">\n' +
                    '                        <label for="email">Email of employee:</label>\n' +
                    '                        <input id="email" type="text"\n' +
                    '                               ng-model="dataItem.email"\n' +
                    '                               class="form-control col-md-8"\n' +
                    '                               placeholder="Input your email">\n' +
                    '                    </div>\n' +
                    '                    <div class="form-group" align="center">\n' +
                    '                        <label for="phone">Number phone:</label>\n' +
                    '                        <input id="phone" type="text"\n' +
                    '                               ng-model="dataItem.phone"\n' +
                    '                               class="form-control col-md-8"\n' +
                    '                               placeholder="Input your phone number">\n' +
                    '                    </div>\n' +
                    '\n' +
                    '                    <button id="editId" type="submit"\n' +
                    '                            class="btn btn-default"\n' +
                    '                            ng-click=edit_Employee(dataItem.id,dataItem.name,dataItem.email,dataItem.phone)\n' +
                    '                    >Edit\n' +
                    '                    </button>\n' +
                    '                    <button id="cancelId" type="cancel"\n' +
                    '                            class="btn btn-default"\n' +
                    '                            ng-click=cancel()\n' +
                    '                    >Cancel\n' +
                    '                    </button>\n' +
                    '                </form>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                            '<div kendo-window="deletepopup" \n' +
                    '         k-modal="true" \n' +
                    '          k-title="\'Confirm delete!!!\'"\n' +
                    '         k-width="200" \n' +
                    '         k-resizable="false" \n' +
                    '         k-height="150" \n' +
                    '         k-visible="false">\n' +
                    '\n' +
                    '\n' +
                    '        <div ng-controller="Popup-delete-ctrl">\n' +
                    '            <button id="confirmId" type="submit"\n' +
                    '                    class="btn btn-default"\n' +
                    '                    ng-click=deleteEmployee(dataItem.id)\n' +
                    '            >Confirm\n' +
                    '            </button>\n' +
                    '            <button id="cancel_Id_delete" type="cancel"\n' +
                    '                    class="btn btn-default"\n' +
                    '                    ng-click=cancel()\n' +
                    '            >Cancel\n' +
                    '            </button>\n' +
                    '        </div>\n' +
                    '    </div>\n'+
                    '        <button class="btn" ng-click=EditEmployee()><i class="fa fa-edit" style="font-size: 22px"></i></button>\n' +
                    '        <button class="btn" ng-click=DeleteEmployee()><i class="fa fa-trash" style="font-size: 22px"></i></button>\n' +
                    '    </div>'
                )
            }


        }]
    };


});
// ========================= POPUP CONTROL DELETE  EMPLOYEE============================

app.controller("Popup-delete-ctrl",function ($scope,$http){
    $scope.deleteEmployee = function (id){
         $http.delete("http://localhost:8085/employee/delete/" + id)
            .then(function (res) {
                console.log(res);
                var grid = $("#grid").data("kendoGrid");
                grid.dataSource.read();
            })
    }
    $scope.cancel = function (){
        $scope.deletepopup.close();
    }
})
// =====================================================================================


// ========================= POPUP CONTROL EDIT EMPLOYEE================================
app.controller("Popup-edit-ctrl", function ($scope, $http) {
    $scope.edit_Employee = function (id, name, email, phone) {
        var data = {
            id: id,
            name: name,
            email: email,
            phone: phone
        }
        if (data.name == null || data.email == null || data.phone == null) {
            kendo.alert("Something is missing!!")
        } else {
            $http.put("http://localhost:8085/employee/update/" + id, JSON.stringify(data))
                .then(function (response) {
                    console.log(response.data);
                    $("#grid").data("kendoGrid").read();
                })
            $scope.editEmployee.close();
            kendo.alert("Edit success employee!!")

        }
    }
    $scope.cancel = function () {
        $scope.editEmployee.close();
    }
})
//==============================================================================================



// ===========================Popup add employee =================================================

app.controller("Sub-employeeCtrl", function ($scope, $http) {
    $scope.putEmployee = function (name, email, phone) {
        var data = {
            name: name,
            email: email,
            phone: phone
        }
        if (data.name == null || data.phone == null || data.email == null) {
            alert("Something is missing!!")
        } else {
            $http.post("http://localhost:8085/employee/add", JSON.stringify(data))
                .then(function (response) {
                    console.log(response);
                    $("#grid").data("kendoGrid").dataSource.read();
                }, function (error) {
                    console.log(error)
                })
            $scope.AddEmployee.close();
            alert("Add success a new employee!!")
        }

    }
    $scope.cancel = function () {
        $scope.AddEmployee.close();
    }
});