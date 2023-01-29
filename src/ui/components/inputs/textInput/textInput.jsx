import styles from './textInput.module.css';


export default function TextInput(props) {
    return <div>
        <textarea className={styles['input']} {...props} />
    </div>
}