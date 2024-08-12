"use client";

import AxiosInstance, { GetAllNotesService, EditNoteService, AddNoteService, DeleteNoteService, PinnedNoteService } from '@/apis/rest.app';
import EmptyState from '@/core/components/EmptyState';
import NoteCard from '@/core/components/NoteCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, Grid, IconButton, TextField } from "@mui/material";
import { enqueueSnackbar } from 'notistack';
import React, { useEffect } from "react";


export default function Home() {

  const [open, setOpen] = React.useState(false);
  const [allNotes, setAllNotes] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState<any>([]);
  const [eachObject, setEachObject] = React.useState<any>(null);
  const handleClickOpen = () => {
    setEachObject(null);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleInputChange = (e: any) => setInputValue(e.target.value);

  const addNewTag = () => {
    if (inputValue?.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  }

  const handleRemoveTag = (tagRemove: any) => {
    setTags(tags?.filter((tag: any) => tag !== tagRemove));
  }

  const fetchData = async () => {
    await AxiosInstance.get(GetAllNotesService)
      .then((response: any) => setAllNotes(response?.data?.note))
      .catch((error: any) => enqueueSnackbar(error.message, { variant: "error" }))
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {

    if (eachObject) {
      setTitle(eachObject?.title),
        setContent(eachObject?.content),
        setTags(eachObject?.tags)
    }

  }, [eachObject])

  const handleSubmit = () => {

    let data = {
      title: title,
      content: content,
      tags: tags
    }

    if (eachObject) {
      AxiosInstance.put(EditNoteService + eachObject?._id, data)
        .then((response: any) => {
          fetchData();
          enqueueSnackbar(response?.data?.message, { variant: "success" });
          handleClose();
        })
        .catch((error: any) => enqueueSnackbar(error.message, { variant: "error" }))
    }
    else {

      AxiosInstance.post(AddNoteService, data).then((response: any) => {
        fetchData();
        enqueueSnackbar(response?.data?.message, { variant: "success" });
        handleClose();
      })
        .catch((error: any) => enqueueSnackbar(error.message, { variant: "error" }))
    }
  }

  const handleDelete = (id: any) => {
    AxiosInstance.delete(DeleteNoteService + id).then((response: any) => {
      fetchData();
      enqueueSnackbar(response?.data?.message, { variant: "success" });
    })
      .catch((error: any) => enqueueSnackbar(error.message, { variant: "error" }))
  }

  const updatePinned = (each: any) => {
    
    AxiosInstance.put(PinnedNoteService + each?._id, {
      isPinned: !each?.isPinned
    })
      .then((response: any) => {
        fetchData();
        enqueueSnackbar(response?.data?.message, { variant: "success" });
      })
      .catch((error: any) => enqueueSnackbar(error.message, { variant: "error" }))
  }

  return (
    <React.Fragment>

      <Button variant="contained" onClick={() => handleClickOpen()}>Add a new note</Button>
      <Box mt={2} />

      <Grid container spacing={2}>
        {
          allNotes?.length > 0 ? allNotes?.map((each: any, i: any) => (
            <Grid item xs={3} key={i}>
              <NoteCard
                each={each}
                setEachObject={setEachObject}
                setOpen={setOpen}
                handleDelete={handleDelete}
                updatePinned={updatePinned}
              />
            </Grid>
          )) : <EmptyState />
        }
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{eachObject ? "Edit note" : "Add a new note"}</DialogTitle>

        <DialogContent>
          <Box mt={1} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                size="small"
                fullWidth
                type="text"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                type="text"
                id="outlined-basic"
                label="Content"
                variant="outlined"
                multiline={true}
                rows={5}
                value={content}
                onChange={(e: any) => setContent(e.target.value)}
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                size="small"
                fullWidth
                type="text"
                id="outlined-basic"
                label="Add tags"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={4}>
              <IconButton onClick={() => addNewTag()}><AddCircleIcon /></IconButton>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", gap: 1 }}>
                {
                  tags?.map((each: any) => (
                    <Chip label={each} onDelete={() => handleRemoveTag(each)} />
                  ))
                }
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={title === "" || content === "" || tags?.length === 0}
                variant="contained"
                onClick={handleSubmit}
                fullWidth>{eachObject ? "Edit Note" : "Add note"}</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

    </React.Fragment>
  );
}
