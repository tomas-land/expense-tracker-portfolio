
//Components
import AddExpenseForm from './AddExpenseForm'
import TopButtons from './TopButtons'
//Internal Lib
import { getCategories } from '@lib/prisma/categories'
//Interfaces
import { iCategory } from '@lib/interfaces'
//Styles
import s from '@styles/Pages/_AddExpensePage.module.scss'


export const dynamic = 'force-dynamic'

const AddExpansePage = async () => {
  const categories: iCategory[] = await getCategories();
  return (
    <section className={s.add_page}>
      <TopButtons />
      <AddExpenseForm categories={categories} />
    </section>
  )
}

export default AddExpansePage

