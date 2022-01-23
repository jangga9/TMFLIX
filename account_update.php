<?php
    //if user click update button
    if(isset($_POST['update'])){
        //start the session
        session_start();
        //get data from the session
        $id=$_SESSION['ID'];
        //get data from form using post method
        $newUname=$_POST['uname'];
        $newEmail=$_POST['email'];
        $newpass=$_POST['password'];
        $newmobile=$_POST['mobile'];

        //the query needed for update
        $query1="UPDATE member SET MemberUsername='$newUname' WHERE MemberID='$id'";
        $query2="UPDATE member SET MemberEmail='$newEmail' WHERE MemberID='$id'";
        $query3="UPDATE member SET MemberPassword='$newpass' WHERE MemberID='$id'";
        $query4="UPDATE member SET MemberMobile='$newmobile' WHERE MemberID='$id'";

        //Create Connection
        $server = "localhost";
        $username = "root";
        $dbpassword = "";
        $dbname = "tmflix";
    
        $conn = mysqli_connect($server, $username, $dbpassword, $dbname);
    
        if(!$conn){
            die("Connection: Failed" .mysqli_connect_error());
        }
        //execute the query
        $result1=mysqli_query($conn,$query1);
        $result2=mysqli_query($conn,$query2);
        $result3=mysqli_query($conn,$query3);
        $result4=mysqli_query($conn,$query4);

        if(!$result1 || !$result2 ||!$result3 ||!$result4){
            //the update have fail
            header("Refresh: 0.1; url= Account.php");
            echo '<script>alert("Unable update your details")</script>';
        }
        else{
            //update successful and update the session data
            $_SESSION["Email"] = $newEmail;
            $_SESSION["Password"] = $newpass;
            $_SESSION["Username"] = $newUname;
            $_SESSION["Mobile"] = $newmobile;
            header("Refresh: 0.1; url= Home.php");
            echo '<script>alert("You have update your details")</script>';

        }

    }
    //if user click cancel button
    if(isset($_POST['cancel'])) {
        header("Refresh: 0.1; url= Home.php");
        echo '<script>alert("You have cancel to update your details")</script>';
    }
?>