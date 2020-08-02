import React from 'react';
import styled from 'styled-components';
import ArrowDown from './arrowDown';

const Container = styled.div`
	position: relative;
	margin: 0 auto;
	background: var(--main-bg-color);
	width: 100%;
	/* min-width: 600px; */
	/* @media screen and (max-width: 600px) {
		overflow: hidden;
	} */
`;

const Background = styled.svg``;

//test commit

const YouAreHere = styled.h3`
	position: absolute;
	bottom: 40vw;
	left: calc(50% - 87px);
	font-size: 24px;
	font-weight: bold;
	/* @media screen and (max-width: 630px) {
		top: 45%;
	}
	@media screen and (max-width: 480px) {
		top: 40%;
	} */
`;

export default function Cover() {
	return (
		<React.Fragment>
			<Container onClick={e => console.log(e.clientY)}>
				<Background
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 837.638 666.142'
					enableBackground='new 0 0 837.638 666.142'
				>
					<g>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M113.667 561.826h610.35M120.602 90.395v485.296M398.034 90.395v485.296M176.088 90.395l.001 485.296M453.52 90.395l.001 485.296M231.575 90.395v485.296M509.007 90.395v485.296M287.061 90.395v485.296M564.493 90.395v485.296M342.548 90.395v485.296M619.979 90.394l.001 485.297M148.345 90.395v485.296M425.777 90.395v485.296M203.832 90.395v485.296M481.263 90.395l.001 485.296M259.318 90.395v485.296M536.75 90.395v485.296M314.804 90.395l.001 485.296M592.236 90.395l.001 485.296M696.273 90.394v485.297M370.291 90.395v485.296M647.723 90.394v485.297M134.474 90.395v485.296M411.906 90.395v485.296M189.96 90.395v485.296M467.392 90.395v485.296M245.446 90.395l.001 485.296M522.878 90.395v485.296M300.933 90.395v485.296M578.365 90.395v485.296M682.402 90.394v485.297M356.419 90.395v485.296M633.851 90.394v485.297M162.217 90.395v485.296M439.649 90.395v485.296M217.703 90.395v485.296M495.135 90.395v485.296M273.19 90.395v485.296M550.621 90.395l.001 485.296M328.676 90.395v485.296M606.108 90.395v485.296M710.145 90.394v485.297M384.162 90.395l.001 485.296M661.594 90.394v485.297M127.538 90.395v485.296M404.97 90.395v485.296M183.024 90.395v485.296M460.456 90.395v485.296M238.511 90.395v485.296M515.942 90.395l.001 485.296M293.997 90.395v485.296M571.429 90.395v485.296M675.466 90.394v485.297M349.483 90.395l.001 485.296M626.915 90.394v485.297M155.281 90.395v485.296M432.713 90.395v485.296M210.767 90.395l.001 485.296M488.199 90.395l.001 485.296M266.254 90.395v485.296M543.686 90.395v485.296M321.74 90.395v485.296M599.172 90.395v485.296M703.209 90.394v485.297M377.227 90.395v485.296M654.658 90.394l.001 485.297M141.409 90.395l.001 485.296M418.841 90.395l.001 485.296M196.896 90.395v485.296M474.328 90.395v485.296M252.382 90.395v485.296M529.814 90.395v485.296M307.869 90.395v485.296M585.3 90.395l.001 485.296M689.337 90.394l.001 485.297M363.355 90.395v485.296M640.787 90.394v485.297M169.153 90.395v485.296M446.585 90.395v485.296M224.639 90.395v485.296M502.071 90.395v485.296M280.125 90.395l.001 485.296M557.557 90.395v485.296M335.612 90.395v485.296M613.044 90.394v485.297M717.081 90.394v485.297M391.098 90.395v485.296M668.53 90.394v485.297M113.666 312.245l610.35-.001M113.666 478.632h610.351M113.666 229.051h610.35M113.666 395.439l610.351-.001M113.666 145.857h610.35M113.667 534.095h610.35M113.666 284.513h610.35M113.666 450.901h610.351M113.666 201.32l610.35-.001M113.666 367.707h610.351M113.666 118.126h610.35M113.667 547.961l610.35-.001M113.666 298.379h610.35M113.666 464.767l610.351-.001M113.666 215.185h610.35M113.666 381.573h610.351M113.666 131.992l610.35-.001M113.666 520.229h610.351M113.666 270.648l610.35-.001M113.666 437.035h610.351M113.666 187.454h610.35M113.666 353.842l610.35-.001M113.666 104.26h610.35M113.666 506.364l610.351-.001M113.666 256.782h610.35M113.666 423.17l610.351-.001M113.666 173.588h610.35M113.666 339.976h610.35M113.666 492.498h610.351M113.666 242.917l610.35-.001M113.666 409.304h610.351M113.666 159.723l610.35-.001M113.666 326.11h610.35'></path>
						</g>
						<path
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
							d='M113.666 90.394h610.305v485.353h-610.305z'
						></path>
					</g>
					<g>
						<path
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
							d='M723.972 90.394l127.839-101.665M723.972 575.747l127.839 101.649'
						></path>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M113.666 561.886l-127.839 95.842M111.28 88.491l-.001 489.159M108.856 86.566v493.01M106.394 84.609v496.924M103.893 82.622v500.898M101.352 80.602v504.938M98.768 78.549l.001 509.044M96.144 76.463v513.216M93.475 74.342v517.458M90.762 72.186v521.77M88.003 69.993v526.155M85.197 67.764l.001 530.614M82.344 65.496v535.15M79.441 63.189v539.764M76.488 60.842v544.458M73.483 58.454v549.234M70.424 56.023v554.096M67.311 53.549v559.044M64.142 51.031v564.08M60.915 48.466v569.21M57.629 45.855l-.001 574.432M54.282 43.195l-.001 579.752M50.872 40.485v585.172M47.399 37.724l-.002 590.694M43.858 34.911l-.001 596.32M40.25 32.043l-.001 602.056M36.571 29.12l-.001 607.902M32.82 26.139l-.001 613.864M28.995 23.099l-.001 619.944M25.094 19.998l-.001 626.145M21.113 16.835l-.001 632.472M17.051 13.607l-.001 638.928M12.906 10.312l-.001 645.517M8.674 6.949l-.001 652.244M4.352 3.515l-.001 659.112M113.666 575.753M113.666 312.276l-127.839-8.713M113.666 478.683l-127.839 60.99M113.667 229.073l-127.84-43.564M113.666 395.48l-127.839 26.138M113.667 145.87l-127.84-78.416M113.666 534.151l-127.839 84.225M113.667 284.542l-127.84-20.33M113.666 450.948l-127.839 49.374M113.667 201.339l-127.84-55.182M113.666 367.745l-127.839 14.522M113.667 118.136l-127.84-90.034M113.666 548.019l-127.839 90.033M113.666 298.409l-127.839-14.521M113.666 464.816l-127.839 55.181M113.667 215.206l-127.84-49.373M113.666 381.612l-127.839 20.331M113.667 132.003l-127.84-84.225M113.666 520.284l-127.839 78.417M113.667 270.675l-127.84-26.139M113.666 437.081l-127.839 43.565M113.667 187.472l-127.84-60.991M113.666 353.878l-127.839 8.713M113.667 104.269l-127.84-95.843M113.666 506.417l-127.839 72.608M113.667 256.808l-127.84-31.948M113.666 423.214l-127.839 37.756M113.667 173.605l-127.84-66.8M113.666 340.011l-127.839 2.904M113.666 492.55l-127.839 66.799M113.667 242.941l-127.84-37.757M113.666 409.347l-127.839 31.947M113.667 159.737l-127.84-72.608M113.666 326.144l-127.839-2.905'></path>
						</g>
						<path
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
							d='M113.666 90.394l-127.839-101.657M113.666 575.747l-127.839 101.658'
						></path>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M723.972 561.881l127.839 95.842M726.358 88.486l.001 489.16M728.781 86.561l.001 493.01M731.243 84.604l.001 496.924M733.744 82.617l.001 500.898M736.286 80.597v504.938M738.869 78.544v509.044M741.494 76.458v513.216M744.163 74.337v517.458M746.876 72.181v521.77M749.635 69.988v526.155M752.44 67.759v530.614M755.294 65.491v535.15M758.197 63.184v539.764M761.15 60.837v544.458M764.155 58.449v549.234M767.214 56.018v554.096M770.327 53.544v559.044M773.496 51.026v564.08M776.723 48.461v569.21M780.009 45.85v574.432M783.356 43.19l.001 579.752M786.765 40.48l.001 585.172M790.239 37.719l.001 590.694M793.779 34.906l.002 596.32M797.388 32.038l.001 602.056M801.067 29.115l.001 607.902M804.818 26.134l.001 613.864M808.643 23.094v619.944M812.544 19.993l.001 626.146M816.525 16.83l.001 632.472M820.587 13.602v638.928M824.732 10.307l.001 645.518M828.964 6.944l.001 652.244M833.285 3.51l.002 659.112M723.972 575.748M723.971 312.272l127.84-8.713M723.971 478.678l127.84 60.99M723.971 229.068l127.84-43.564M723.971 395.475l127.84 26.138M723.971 145.865l127.84-78.416M723.972 534.147l127.839 84.225M723.971 284.537l127.84-20.33M723.971 450.943l127.84 49.374M723.971 201.334l127.84-55.182M723.971 367.74l127.84 14.522M723.971 118.131l127.84-90.034M723.972 548.014l127.839 90.033M723.971 298.404l127.84-14.521M723.971 464.811l127.84 55.181M723.971 215.201l127.84-49.373M723.971 381.608l127.84 20.33M723.971 131.998l127.84-84.225M723.971 520.279l127.84 78.417M723.971 270.67l127.84-26.139M723.971 437.076l127.84 43.565M723.971 187.467l127.84-60.991M723.971 353.873l127.84 8.713M723.971 104.264l127.84-95.843M723.971 506.412l127.84 72.608M723.971 256.803l127.84-31.948M723.971 423.209l127.84 37.756M723.971 173.6l127.84-66.8M723.971 340.006l127.84 2.904M723.971 492.545l127.84 66.799M723.971 242.936l127.84-37.757M723.971 409.342l127.84 31.947M723.971 159.733l127.84-72.608M723.971 326.139l127.84-2.905'></path>
						</g>
						<path
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
							d='M723.972 90.39l127.839-101.658M723.972 575.742l127.839 101.658'
						></path>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M4683.387 158.857l127.839-101.665M4669.516 158.857l122.028-101.665M4655.646 158.857l116.217-101.665M4641.775 158.857l110.407-101.665M4627.904 158.857l104.596-101.665M4614.034 158.857l98.785-101.664M4600.163 158.857l92.974-101.664M4586.292 158.857l87.164-101.664M4572.422 158.857l81.352-101.664M4558.551 158.857l75.542-101.664M4544.681 158.857l69.731-101.664M4530.81 158.857l63.92-101.663M4516.939 158.857l58.109-101.663M4503.069 158.857l52.298-101.663M4489.199 158.857l46.487-101.663M4475.328 158.857l40.676-101.663M4461.458 158.857l34.865-101.663M4447.587 158.857l29.054-101.662M4433.716 158.857l23.244-101.662M4419.846 158.857l17.432-101.662M4405.975 158.857l11.622-101.662M4392.104 158.857l5.812-101.662M4378.234 158.857v-101.661M4364.363 158.857l-5.811-101.661M4350.493 158.857l-11.622-101.661M4336.622 158.857l-17.433-101.661M4322.751 158.857l-23.243-101.661M4308.881 158.857l-29.054-101.661M4295.01 158.857l-34.865-101.66M4281.14 158.857l-40.676-101.66M4267.269 158.857l-46.487-101.66M4253.398 158.857l-52.297-101.66M4239.528 158.857l-58.109-101.66M4225.658 158.857l-63.92-101.659M4211.787 158.857l-69.731-101.659M4197.917 158.857l-75.542-101.659M4184.046 158.857l-81.353-101.659M4170.175 158.857l-87.163-101.659M4156.305 158.857l-92.974-101.659M4142.434 158.857l-98.785-101.658M4128.563 158.857l-104.595-101.658M4114.693 158.857l-110.407-101.658M4100.822 158.857l-116.217-101.658M4086.952 158.857l-122.029-101.658M4073.081 158.857l-127.839-101.658'></path>
						</g>
					</g>
					<g>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M4.353 662.62h828.933M120.602 575.747l-128.589 104.568M398.014 575.747l-8.972 104.568M176.084 575.747l-104.665 104.568M453.496 575.747l14.952 104.568M231.566 575.747l-80.741 104.568M508.979 575.747l38.875 104.568M287.049 575.747l-56.818 104.568M564.461 575.747l62.799 104.568M342.531 575.747l-32.894 104.568M619.943 575.747l86.723 104.568M148.343 575.747l-116.627 104.568M425.755 575.747l2.99 104.568M203.825 575.747l-92.703 104.568M481.237 575.747l26.914 104.568M259.308 575.747l-68.78 104.568M536.72 575.747l50.837 104.568M314.79 575.747l-44.856 104.568M592.202 575.747l74.761 104.568M696.232 575.747l119.618 104.568M370.272 575.747l-20.933 104.568M647.685 575.747l98.684 104.568M134.472 575.747l-122.608 104.568M411.884 575.747l-2.99 104.568M189.955 575.747l-98.685 104.568M467.367 575.747l20.933 104.568M245.437 575.747l-74.761 104.568M522.849 575.747l44.857 104.568M300.919 575.747l-50.837 104.568M578.332 575.747l68.78 104.568M682.361 575.747l113.637 104.568M356.402 575.747l-26.914 104.568M633.814 575.747l92.704 104.568M162.213 575.747l-110.646 104.568M439.625 575.747l8.972 104.568M217.696 575.747l-86.723 104.568M495.108 575.747l32.895 104.568M273.178 575.747l-62.799 104.568M550.59 575.747l56.819 104.568M328.661 575.747l-38.876 104.568M606.073 575.747l80.742 104.568M710.102 575.747l125.599 104.568M384.143 575.747l-14.952 104.568M661.555 575.747l104.666 104.568M127.537 575.747l-125.598 104.568M404.949 575.747l-5.981 104.568M183.019 575.747l-101.675 104.568M460.431 575.747l17.943 104.568M238.502 575.747l-77.752 104.568M515.914 575.747l41.866 104.568M293.984 575.747l-53.828 104.568M571.396 575.747l65.79 104.568M675.426 575.747l110.646 104.568M349.467 575.747l-29.905 104.568M626.879 575.747l89.713 104.568M155.278 575.747l-113.636 104.568M432.69 575.747l5.981 104.568M210.76 575.747l-89.712 104.568M488.173 575.747l29.904 104.568M266.243 575.747l-65.79 104.568M543.655 575.747l53.828 104.568M321.725 575.747l-41.866 104.568M599.138 575.747l77.751 104.568M703.167 575.747l122.609 104.568M377.208 575.747l-17.943 104.568M654.62 575.747l101.675 104.568M141.407 575.747l-119.617 104.568M418.82 575.747v104.568M196.89 575.747l-95.694 104.568M474.302 575.747l23.924 104.568M252.372 575.747l-71.77 104.568M529.784 575.747l47.848 104.568M307.855 575.747l-47.847 104.568M585.267 575.747l71.771 104.568M689.297 575.747l116.627 104.568M363.337 575.747l-23.923 104.568M640.749 575.747l95.695 104.568M169.149 575.747l-107.656 104.568M446.561 575.747l11.962 104.568M224.631 575.747l-83.732 104.568M502.043 575.747l35.886 104.568M280.113 575.747l-59.808 104.568M557.526 575.747l59.809 104.568M335.596 575.747l-35.885 104.568M613.008 575.747l83.733 104.568M717.038 575.747l128.589 104.568M391.078 575.747l-11.961 104.568M668.491 575.747l107.656 104.568M70.425 610.112l696.789-.001M28.996 643.036l779.647-.001M88.004 596.141h661.631M50.873 625.65h735.893M103.894 583.513h629.851M12.907 655.822h811.826M76.489 605.293l684.661-.001M36.572 637.015h764.495M93.476 591.793l650.687-.001M57.63 620.28h722.379M108.857 579.569h619.925M8.674 659.186l820.291-.001M73.484 607.681h690.672M32.821 639.996h771.997M90.763 593.949h656.113M54.283 622.94h729.073M106.396 581.525h624.848M17.052 652.528h803.535M79.442 602.946l678.755-.001M40.251 634.092l757.138-.001M96.145 589.672h645.349M60.916 617.669l715.807-.001M111.281 577.643h615.078M21.114 649.3l795.411-.001M82.345 600.639l672.949-.001M43.859 631.224h749.921M98.77 587.586l640.099-.001M64.143 615.104h709.353M25.095 646.136h787.45M85.199 598.371h667.242M47.399 628.411l742.841-.001M101.353 585.533h634.933M67.312 612.586l703.015-.001'></path>
						</g>
						<g
							stroke='var(--main-fg-color)'
							strokeWidth='.50'
							fill='none'
						>
							<path d='M4.352 3.522h828.933M120.6 90.394l-128.588-104.567M398.013 90.394l-8.972-104.567M176.083 90.394l-104.665-104.567M453.495 90.394l14.952-104.567M231.565 90.394l-80.741-104.567M508.977 90.394l38.876-104.567M287.048 90.394l-56.818-104.567M564.46 90.394l62.799-104.567M342.53 90.394l-32.895-104.567M619.942 90.394l86.723-104.567M148.342 90.394l-116.627-104.567M425.754 90.394l2.99-104.567M203.824 90.394l-92.703-104.567M481.236 90.394l26.914-104.567M259.306 90.394l-68.779-104.567M536.719 90.394l50.837-104.567M314.789 90.394l-44.857-104.567M592.201 90.394l74.761-104.567M696.231 90.395l119.618-104.568M370.271 90.394l-20.933-104.567M647.684 90.394l98.684-104.567M134.471 90.394l-122.608-104.567M411.883 90.394l-2.99-104.567M189.953 90.394l-98.684-104.567M467.366 90.394l20.933-104.567M245.436 90.394l-74.761-104.567M522.848 90.394l44.857-104.567M300.918 90.394l-50.837-104.567M578.331 90.394l68.78-104.567M682.36 90.395l113.637-104.568M356.401 90.394l-26.914-104.567M633.813 90.394l92.704-104.567M162.212 90.394l-110.646-104.567M439.624 90.394l8.972-104.567M217.695 90.394l-86.723-104.567M495.107 90.394l32.895-104.567M273.177 90.394l-62.799-104.567M550.589 90.394l56.819-104.567M328.66 90.394l-38.876-104.567M606.072 90.394l80.742-104.567M710.101 90.395l125.599-104.568M384.142 90.394l-14.952-104.567M661.554 90.394l104.666-104.567M127.536 90.394l-125.598-104.567M404.948 90.394l-5.981-104.567M183.018 90.394l-101.675-104.567M460.43 90.394l17.943-104.567M238.501 90.394l-77.752-104.567M515.913 90.394l41.866-104.567M293.983 90.394l-53.828-104.567M571.395 90.394l65.79-104.567M675.425 90.395l110.646-104.568M349.465 90.394l-29.904-104.567M626.878 90.394l89.713-104.567M155.277 90.394l-113.636-104.567M432.689 90.394l5.981-104.567M210.759 90.394l-89.713-104.567M488.172 90.394l29.904-104.567M266.242 90.394l-65.79-104.567M543.654 90.394l53.828-104.567M321.724 90.394l-41.866-104.567M599.136 90.394l77.752-104.567M703.166 90.395l122.608-104.568M377.207 90.394l-17.943-104.567M654.619 90.394l101.675-104.567M141.406 90.394l-119.617-104.567M418.819 90.394v-104.567M196.889 90.394l-95.694-104.567M474.301 90.394l23.924-104.567M252.371 90.394l-71.77-104.567M529.783 90.394l47.848-104.567M307.854 90.394l-47.847-104.567M585.266 90.394l71.771-104.567M689.295 90.395l116.628-104.568M363.336 90.394l-23.923-104.567M640.748 90.394l95.695-104.567M169.148 90.394l-107.656-104.567M446.56 90.394l11.962-104.567M224.63 90.394l-83.732-104.567M502.042 90.394l35.886-104.567M280.112 90.394l-59.808-104.567M557.525 90.394l59.809-104.567M335.595 90.394l-35.885-104.567M613.007 90.394l83.733-104.567M717.037 90.395l128.589-104.568M391.077 90.394l-11.961-104.567M668.49 90.394l107.656-104.567M70.424 56.03h696.789M28.995 23.106h779.647M88.003 70l661.631.001M50.872 40.492h735.893M103.893 82.629h629.851M12.905 10.319l811.827.001M76.488 60.849h684.661M36.571 29.127h764.495M93.475 74.349h650.687M57.629 45.862h722.379M108.856 86.573h619.925M8.673 6.956h820.291M73.483 58.461h690.671M32.82 26.146h771.997M90.762 72.193h656.113M54.282 43.202h729.073M106.395 84.616l624.848.001M17.051 13.614h803.535M79.441 63.196h678.755M40.249 32.05h757.139M96.144 76.47h645.349M60.915 48.473h715.807M111.279 88.498l615.079.001M21.113 16.842h795.411M82.344 65.503h672.949M43.858 34.918h749.921M98.769 78.556h640.099M64.142 51.038h709.353M25.093 20.005l787.451.001M85.198 67.771h667.242M47.398 37.731h742.841M101.352 80.609h634.933M67.311 53.556h703.015'></path>
						</g>
					</g>
				</Background>
				<YouAreHere>You Are Here</YouAreHere>
				<ArrowDown />
			</Container>
		</React.Fragment>
	);
}
