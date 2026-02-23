import { messages } from "../../Frontend/src/lib/mock-data.js";
import User from "../models/User.js"

export async function updateProfile (req,res) {
    try {
        const {firstname, lastname, email, phone } =  req.body;
        const { id } = req.params;

        const user = await User.findByIdAndUpdate({
            firstname, lastname, email, phone
            
        },
        id,
        next= true
    );

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found"
            })
        };

        return res.status(200).json({
            status: true,
            messsage: "Use updated successfully",
            data: user
        })
    } catch (err){
        console.log("Internal seerver error" + err);
        return res.status(500).json({
            status: false,
            messages: "Internal server error",
            err: err.message
        })
    }
};


export async function getUser (req, res) {
    try {
        const { id } = req.params;

        const user = await User.findById (id);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User Doesn't Exist"
            })
        }

        return res.status(200).json({
            status: true,
            message: "User fetched successfully",
            data: user
        })

    } catch (err) {
        console.log("Internal server error");
        return res.status(500).json({
            status: false,
            message: "Internal Server error",
            err: err.message
        })
    }
}


export async function getAllUsers (req, res) {
    try {
        const users = await User.findAll();
        if (!users) {
            return res.status(404).json({
                status: false,
                message: "There is No user"
            })
        }

        return res.status(200).json({
            status: true,
            message: "Users fetched successfully",
            data: user
        })

    } catch (err) {
        console.log("Internal server error");
        return res.status(500).json({
            status: false,
            message: "Internal Server error",
            err: err.message
        })
    }
}

export async function deleteUser (req, res) {
    try {
        const {id} = req.params;
        
        const deleteduser = await User.findById(id);
        if(!user) {
            return res.status(400).json({
                status: false,
                message: "User doesn't exist"
            })
        }
        const user = await User.findByIdAndDelete(id) 

        return res.status(200).json({
            status: true,
            message: "User deleted successfully",
            data: user
        })

    } catch (err) {
        console.log("Failed to delete the user" + err);
        return res.status(500).json({
            status: failed,
            message: "Failed  to delete the user",
            err: err.message
        })
    }
}


export async function getMessages(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                status: false,
                message: "User not found"
            });
        }   
        const userMessages = messages.filter(message => message.userId === id);
        return res.status(200).json({
            status: true,
            message: "Messages fetched successfully",
            data: userMessages
        });
    } catch (err) {
        console.log("Failed to get messages" + err);
        return res.status(500).json({
            status: false,
            message: "Failed to get messages",
            error: err.message
        });
    }
}