@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private List<Note> notes = new ArrayList<>();

    @GetMapping("/")
    public List<Note> getAllNotes() {
        return notes;
    }

    @PostMapping("/")
    public Note createNote(@RequestBody Note note) {
    notes.add(note);
    return note;
}

@DeleteMapping("/{id}")
public void deleteNote(@PathVariable int id) {
    notes.removeIf(note -> note.getId() == id);
}
}