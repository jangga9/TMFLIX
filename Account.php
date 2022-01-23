<?php include("header.php");
?>
<!DOCTYPE html>

<html>
    <body>
     <div class="formcontainer">
        <h1>Account Details</h1> 
        <div class="formplace">
            <form action="account_update.php" method="POST">
                <label>Name:</label><br>
                <input type="text" name="uname" value="<?php echo $_SESSION["Username"]?>"><br><br>
                <label>Email:</label><br>
                <input type="text" name="email" value="<?php echo $_SESSION["Email"]?>"><br><br>
                <label>Password:</label><br>
                <input type="password" name="password" value="<?php echo $_SESSION["Password"]?>"><br><br>
                <label>Phone NO:</label><br>
                <input type="text" name="mobile" value="<?php echo $_SESSION["Mobile"]?>"><br><br>
                <center>
                <button type="submit" name="update">Update</button>
                <button type="submit" name="cancel">Cancel</button>
                </form>
                <form action="receipt.php">
                <button type="submit">Receipt</button>
                </form>
        
            </center>
            
        </div>   
    </div>   
    </body>