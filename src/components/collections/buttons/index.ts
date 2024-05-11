import SimpleButton from './SimpleButton/SimpleButton'
import DummyButton from './DummyButton/DummyButton'

export type ComponentType = typeof SimpleButton | typeof DummyButton

const componentList: ComponentType[] = [SimpleButton, DummyButton]

export default componentList
