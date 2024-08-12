
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardContent, CardHeader, Chip, IconButton, Typography } from "@mui/material";
import moment from 'moment';


const NoteCard = ({ each, setEachObject, setOpen, handleDelete, updatePinned }: any) => {
    return (
        <Card elevation={0} variant="outlined" sx={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}>
            <CardHeader
                action={
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton size="small" onClick={() => { setEachObject(each); setOpen(true) }}><EditIcon fontSize="small" /></IconButton>
                        <IconButton size="small" onClick={() => handleDelete(each?._id)}><DeleteIcon fontSize="small" /></IconButton>
                        <IconButton size="small" onClick={() => updatePinned(each)}><ArrowCircleUpIcon fontSize="small" sx={{ color: each?.isPinned === true ? "blue" : '' }} /></IconButton>
                    </Box>
                }
                title={<Typography fontSize={"20px"} color={"#000000"} fontWeight={700}>{each?.title}</Typography>}
                subheader={<Typography variant="body2">{moment(each?.createdAt).format("Do MMMM YYYY")}</Typography>}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {each?.content}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 1 }}>
                    {
                        each?.tags?.length > 0 && each?.tags?.map((e: any, i: any) => <Chip key={i} label={e} size='small' />)
                    }
                </Box>
            </CardContent>
        </Card>
    )
}

export default NoteCard