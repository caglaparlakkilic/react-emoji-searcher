import { render, screen } from '@testing-library/react';
import Filter from './components/Filter';
import Header from './components/Header';
import emojiList from './emojiList.json';



it("renders header without crashing", ()=>{
  render(<Header />);
  const headerElement = screen.getByText("🤔Emoji Searcher");
  expect(headerElement).toBeInTheDocument();
})

it("renders emoji list without crashing", ()=>{
  render(<Filter />);
  const emojiListe = screen.getAllByTitle('emojiListesi')
  expect(emojiListe.length).toBe(emojiList.length);
})

it("render filtered emojies without crashing", ()=>{
  render(<Filter />);
  const filteredText = '10';
  const filteredEmojies = emojiList.filter((item)=>{
    return Object.keys(item).some((key)=>{ 
        return (
        item[key].toString().toLowerCase().includes(filteredText.toLocaleLowerCase()));
    })})
  expect(filteredEmojies.length).toBe(3);
})
