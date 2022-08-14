import { AuthNote, AuthNoteInput, DbTableName } from "@/types/gloable";
import useSupabase from "@/composables/useSupabase"
export default function useAuthNote() {
  const { supabase } = useSupabase()
  const { authData } = useAuth()
  const router = useRouter()
  const notesInput = ref<AuthNoteInput>({
    title:"",
    note:"",
  })
  const notes = ref<AuthNote[]>()
   async function addNotes(note:AuthNoteInput){
    if(!note.title || !note.note) return

    const {error}  = await supabase.from(DbTableName.AUTHNOTE).insert({
        title:note.title,
        note:note.note,
        user_id:authData.value.id
    })

    if(error) throw new Error()
    cleareInput()
    router.go(0)
  }

  async function getAuthNotes(){
    const { data, error } = await supabase
    .from(DbTableName.AUTHNOTE)
    .select()
    .eq("user_id",authData.value.id)
    notes.value = data
    if(error) throw new Error()
  }
 

  function cleareInput(){
    notesInput.value.title = ""
    notesInput.value.note = ""
  }
  return {
    //data
    notesInput,
    notes,
    //methods
    addNotes,
    getAuthNotes,
  };
}
