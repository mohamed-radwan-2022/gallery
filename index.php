<?php 

$username=$_REQUEST['username'];
$password=$_REQUEST['password'];



if(isset($_POST['btntest'])){
    $host="localhost";
    $user="root";
    $password="";
    $db="mohamed";


    $conn=mysqli_connect($host,$user,$password,$db);


    $insert="insert into info values('$username','$password')";


    mysqli_query($conn,$insert);

    if($conn){
        // echo("<h1 style=color:green;> Your Registartion is Done!</h1>");
        header("Location: gallery.html");
    }else{
        echo("<h1 style=color:red;> Your Registartion is filed!</h1>");

    }
}

?>
