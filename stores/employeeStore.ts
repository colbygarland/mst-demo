import { types, destroy } from 'mobx-state-tree';

export interface EmployeeType {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  image?: string;
  bio: string;
}

const Employee = types.model({
  id: types.identifier,
  name: types.string,
  email: types.string,
  phone: types.string,
  position: types.string,
  image: types.optional(types.string, '/images/seinfeld.png'),
  bio: types.string,
});

export const EmployeeStore = types
  .model('EmployeeStore')
  .props({
    employees: types.array(Employee),
  })
  .views((self) => ({
    getEmployeeById(id: string | string[] | undefined): EmployeeType | null {
      const employee = self.employees.find((e) => e.id === id);
      if (employee === undefined) return null;
      return employee;
    },
  }))
  .actions((self) => ({
    // Simply adds; doesn't check for existing employee (yet?)
    add: (employee: EmployeeType): void => {
      self.employees.push(employee);
    },
    delete: (employee: EmployeeType): void => {
      destroy(employee);
    },
  }));

export const EmployeeStoreInitialState = {
  employees: [
    {
      id: 'fgte-regr-ghjg-dfdg',
      name: 'Cosmo Kramer',
      email: 'kman@petermanbustours.com',
      phone: '555-FILK',
      position: 'Proctology',
      image: '/images/kramer.png',
      bio: "Cosmo Kramer, usually referred to by his surname, is a fictional character on the American television sitcom Seinfeld (1989–1998), played by Michael Richards. The character is loosely based on comedian Kenny Kramer, Larry David's ex-neighbor across the hall. Kramer is the friend and neighbor of main character Jerry, who resides in Apartment 5B, and is friends with George and Elaine. Of the series' four central characters, only Kramer has no visible means of support; what few jobs he holds seem to be nothing more than larks, although he never seems to be short of money. A lovable rogue, his trademarks include his upright hairstyle and vintage wardrobe, whose combination led Elaine to characterize him as a 'hipster doofus';[1] his taste in fresh fruit; love of occasional smoking, Cuban cigars in particular; bursts through Jerry's apartment door without even bothering to knock first; frequent pratfalls and penchant for nonsensical, percussive outbursts of noise to indicate skepticism, agreement, irritation and a variety of other feelings. He has been described as 'an extraordinary cross between Eraserhead and Herman Munster'.[2] Kramer appeared in all but two episodes: 'The Chinese Restaurant' and 'The Pen', in the second and third seasons, respectively. In 'The Seinfeld Chronicles', the pilot episode of Seinfeld, Kramer was originally called 'Kessler' to prevent legal issues since it was based on Larry David's real-life next-door neighbor Kenny Kramer. Kenny apparently liked Seinfeld and permitted Larry David, who was the writer of Seinfeld from seasons 1 to 7, to use 'Kramer' as Kessler's name. Beginning with the second episode of the show, 'The Stake Out', the character's name was changed to Kramer.[3] ",
    },
    {
      id: 'gher-dfhg-hjds-ghjj',
      name: 'George Costanza',
      email: 'art@vandelayindustries.com',
      phone: '615-6423',
      position: 'Marine Biologist',
      image: '/images/george.png',
      bio: "George Louis Costanza Nickname (The Handsome Devil) is a fictional character in the American television sitcom Seinfeld (1989–1998), played by Jason Alexander. He has variously been described as a 'short, stocky, slow-witted, bald man' (by Elaine Benes and Costanza himself), 'weak, spineless, man of temptations' (by Cosmo Kramer), and 'Lord of the Idiots' (by Costanza himself). George and Jerry were junior high school friends (although in 'The Betrayal', Season 9, Episode 8, George says the two have been friends since fourth grade) and remained friends afterward.[2][3] He is friends with Jerry Seinfeld, Cosmo Kramer, and Elaine Benes. George appears in every episode except 'The Pen' (third season).  The character was originally based on Seinfeld co-creator Larry David but is surnamed after Jerry Seinfeld's real-life New York friend, Michael Costanza. Alexander reprised his role in an episode of Comedians in Cars Getting Coffee, reuniting with Jerry Seinfeld and Wayne Knight (also reprising their roles as Jerry and Newman, respectively). ",
    },
    {
      id: 'edwf-ftge-vhjm-sdhl',
      name: 'Elaine Benes',
      email: 'suzy@jpeterman.catalog',
      phone: '615-7479',
      position: 'Pendant Publishing',
      image: '/images/elaine.png',
      bio: "Elaine Marie Benes is a fictional character on the American television sitcom Seinfeld, played by Julia Louis-Dreyfus. Elaine's best friend is her ex-boyfriend Jerry Seinfeld, and she is also good friends with George Costanza and Cosmo Kramer. Louis-Dreyfus received critical acclaim for her performance as Elaine, winning an Emmy, a Golden Globe and five SAG Awards. She reprised the role during season 41 of Saturday Night Live in 2016.",
    },
  ],
};
