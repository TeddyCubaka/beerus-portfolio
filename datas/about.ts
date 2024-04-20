import { BsLaptop } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { DescriptiveButton } from "./career";

export const aboutDetails: DescriptiveButton[] = [
	{
		id: 0,
		icon: BsLaptop,
		name: "Développement web",
		content:
			"Dans le dévéloppement web, Teddy fait généralement du Html5, CSS3. A ceci s'ajoute le Sql, Mysql et Php. Bien-sûr, il ne fait pas que coder. Il peut faire le suivi des projet et son élaboration. Il va de la modélisation d'un système à sa mise en ligne de l'application. Il peut aussi faire la maintenace d'une application web ou d'un site web. Il fait plusieurs technologie et veut en apprendre encore plus. Dans la conception web, Fabrice peut faire les deux partie d'un site web, la partie client et la partie serveur.",
		subContent:
			"HTML, CSS, JavaScript, Sql Serveur, Lysql",
		mobileName: "Dév Web",
	},
	{
		id: 1,
		icon: BiMobileAlt,
		name: "Développement mobile",
		content:
			"Tout comme pour le web, Fabrice de fait la conception des bases de données. Il peut étudier, modéliser et concevoir le système pour une application. Et bien-sûr il peut aussi faire la maintenance de ce dernier.",
		subContent: "Sql, Mysql",
		mobileName: "Dév Mob",
	},
	{
		id: 2,
		icon: MdDesignServices,
		name: "Modélisation et Design d'un site",
		content:
			"Rare sont les développeurs avec un goût du design. Fabrice, justement en a. Il a une passion pour les codes et pour le design. Mais que vaut un système sans une bonne modélisation, rien. Fabrice vous fait le tout. Il modélise votre système de manière optimale et ainsi vous pourriez utiliser votre système pendant longtemps.",
		subContent:
			"Adobe illustrator et photoshop...",
		mobileName: "Mod & Des",
	},
];
