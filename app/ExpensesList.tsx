"use client"

//Components
import ExpensesListItem from './ExpensesListItem';
//Internal Lib
import { useExpensesSWR } from '@lib/hooks/useSWRrequest';
//External Lib
import Skeleton from 'react-loading-skeleton';
//Styles
import s from '@styles/Components/_ExpensesList.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'


const ExpensesList = () => {

  const { expenses, mutate, error, isLoading }: any = useExpensesSWR();

  return (
    <div className={s.expenses_list}>
      <h3>Paskutiniai atsiskaitymai</h3>
      <ul className={s.list}>
        {isLoading ? <Skeleton height={50} className={s.skeleton} count={10} highlightColor={'#c8c8c9'} /> :
          (
            expenses?.map((expense: any) => {
              return (
                <ExpensesListItem key={expense.id} expense={expense} />
              )
             }
            )
          )}
      </ul>
    </div>
  )
}
export default ExpensesList
