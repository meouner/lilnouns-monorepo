import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';

const Documentation = () => {
  const playgroundLink = <Link text="Playground" url="/playground" leavesPage={false} />;
  const nounsDao = <Link text="Nouns DAO" url="https://nouns.wtf" leavesPage={true} />;
  const publicDomainLink = (
    <Link
      text="public domain"
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link text="Compound Governance" url="https://compound.finance/governance" leavesPage={true} />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>WTF?</h1>
          <p className={classes.aboutText}>
            Meouns are just like Nouns, but Lil!
            <br />
            <br />
            An expansion DAO based on {nounsDao}, Meouns DAO works to create a new layer within
            the Nouns ecosystem; Nouns as cats. By expanding the ecosystem, Meouns DAO aims at
            exposing more people to Nouns.
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            Learn more below, or start creating Meouns off-chain using the {playgroundLink}.
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Summary</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Meouns artwork is in the {publicDomainLink}.</li>
                <li>One Meoun is born and trustlessly auctioned every 69 minutes, forever.</li>
                <li>
                  100% of Meouns auction proceeds are trustlessly sent to the Meouns treasury.
                </li>
                <li>Settlement of one auction kicks off the next.</li>
                <li>All Meouns are members of Meouns DAO.</li>
                <li>Meouns DAO is backed by Nouns via Small Grants.</li>
                <li>Meouns DAO uses Nouns DAO’s fork of  {compoundGovLink}.</li>
                <li>One Meoun is equal to one vote.</li>
                <li>The treasury is controlled exclusively by Meouns via governance.</li>
                <li>Artwork is generative and stored directly on-chain (not IPFS).</li>
                <li>
                  No explicit rules exist for attribute scarcity; all Meouns are equally rare.
                </li>
                <li>
                  Meounders receive rewards in the form of Meouns (10% of supply for first 5
                  years).
                </li>
                <li>
                  Nouns DAO receives rewards in the form of Meouns (10% of supply for first 5
                  years).
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              15 Minute Auctions
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                The Meouns Auction Contract will act as a self-sufficient Meoun generation and
                distribution mechanism, auctioning one Meoun every 69 minutes, forever. 100% of
                auction proceeds (ETH) are automatically deposited in the Meouns DAO treasury,
                where they are governed by Meoun owners.
              </p>

              <p className={classes.aboutText}>
                Each time an auction is settled, the settlement transaction will also cause a new
                Meoun to be minted and a new 69 minute auction to begin.{' '}
              </p>
              <p>
                While settlement is most heavily incentivized for the winning bidder, it can be
                triggered by anyone, allowing the system to trustlessly auction Meouns as long as
                Ethereum is operational and there are interested bidders.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Bidding and Settling Auctions
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <h3>Bids</h3>
                Once an auction starts, everyone has 15 minutes to bid. Anyone can bid an amount
                at/above 0.01 eth. The Amount bid is returned to bidder if they lose the auction
                (minus gas spent on bid transaction).
                <br />
                <br />
                Bids at the very last minute increase the auction time by 1 and a half minutes.
                Sometimes, multiple bids are sent at the same time. This may result in bids coming
                in and winning an auction at the very last minute/seconds (irrespective of time
                increase).
                <br />
                <p className={classes.aboutText}>
                  <h3>Bid Refunds</h3>
                  Unsuccessful bids are refunded in full. The timing of refunds may be offset by 1
                  bidder. This means that a refund is processed for an unsuccessful bid, when a
                  higher bid is submitted.
                </p>
              </p>

              <p className={classes.aboutText}>
                <h3>Settlement</h3>
                When an auction ends, a gas-only transaction is required to mint the current Lil
                Noun to the winners wallet and start the next auction. Anyone can settle an auction.
                As gas price fluctuates, the cost of settlement also fluctuates.
                <br />
                <br />
                Settlement gas price of every 9th Meoun is higher. This is due to the transaction
                also triggering 2 free Meoun mints: The Meounders mint and The Nouns DAO mint.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Meouns DAO</Accordion.Header>
            <Accordion.Body>
              Meouns DAO utilizes Nouns DAO's fork of {compoundGovLink} and is the main governing
              body of the Meouns ecosystem. The Meouns DAO treasury receives 100% of ETH
              proceeds from daily Meoun auctions. Each Meoun is an irrevocable member of Lil
              Nouns DAO and entitled to one vote in all governance matters. Meoun votes are
              non-transferable (if you sell your Meoun the vote goes with it) but delegatable,
              which means you can assign your vote to someone else as long as you own your Meoun.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Governance ‘Slow Start’
            </Accordion.Header>
            <Accordion.Body>
              <p>
                In addition to the precautions taken by Compound Governance, Meounders have given
                themselves a special veto right to ensure that no malicious proposals can be passed
                while the Meoun supply is low. This veto right will only be used if an obviously
                harmful governance proposal has been passed, and is intended as a last resort.
              </p>
              <p>
                Meounders will proveably revoke this veto right when they deem it safe to do so.
                This decision will be based on a healthy Meoun distribution and a community that
                is engaged in the governance process.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Meoun Traits</Accordion.Header>
            <Accordion.Body>
              <p>
                Meouns are generated randomly based Ethereum block hashes. There are no 'if'
                statements or other rules governing Meoun trait scarcity, which makes all Lil
                Nouns equally rare. As of this writing, Meouns are made up of:
              </p>
              <ul>
                <li>backgrounds (2) </li>
                <li>bodies (30)</li>
                <li>accessories (137) </li>
                <li>heads (234) </li>
                <li>glasses (21)</li>
              </ul>
              You can experiment with off-chain Meoun generation at the {playgroundLink}.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              On-Chain Artwork
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Meouns are stored directly on Ethereum and do not utilize pointers to other
                networks such as IPFS. This is possible because Meoun parts are compressed and
                stored on-chain using a custom run-length encoding (RLE), which is a form of
                lossless compression.
              </p>

              <p>
                The compressed parts are efficiently converted into a single base64 encoded SVG
                image on-chain. To accomplish this, each part is decoded into an intermediate format
                before being converted into a series of SVG rects using batched, on-chain string
                concatenation. Once the entire SVG has been generated, it is base64 encoded.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Meoun Seeder Contract
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The Meoun Seeder contract is used to determine Meoun traits during the minting
                process. The seeder contract can be replaced to allow for future trait generation
                algorithm upgrades. Additionally, it can be locked by the Meouns DAO to prevent
                any future updates. Currently, Meoun traits are determined using pseudo-random
                number generation:
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <br />
              <p>
                Trait generation is not truly random. Traits can be predicted when minting a Lil
                Noun on the pending block.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Meounder's Reward
            </Accordion.Header>
            <Accordion.Body>
              <p>
                'Meounders' are the group of builders that initiated Meouns. Here are the Lil
                Nounders:
              </p>
              <ul>
                <li>
                  <Link text="@0xsvg" url="https://twitter.com/0xsvg" leavesPage={true} />
                </li>
                <li>
                  <Link
                    text="@adelidusiam"
                    url="https://twitter.com/adelidusiam"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link text="@js_horne" url="https://twitter.com/js_horne" leavesPage={true} />
                </li>
                <li>
                  <Link text="@dg_goens" url="https://twitter.com/dg_goens" leavesPage={true} />
                </li>
              </ul>
              <p>
                Because 100% of Meoun auction proceeds are sent to Meouns DAO, Meounders
                have chosen to compensate themselves with Meouns. Every 10th Meoun for the
                first 5 years of the project (Meoun ids #0, #10, #20, #30 and so on) will be
                automatically sent to the Meounder's multisig to be vested and shared among the
                founding members of the project.
              </p>
              <p>
                Meounder distributions don't interfere with the cadence of 15 minute auctions.
                Meouns are sent directly to the Meounder's Multisig, and auctions continue on
                schedule with the next available Meoun ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Nouns DAO's Reward
            </Accordion.Header>
            <Accordion.Body>
              <p>
                For being selfless stewards of cc0, Meounders have chosen to compensate the Nouns
                DAO with Meouns. Every 11th Meoun for the first 5 years of the project (Meoun
                 ids #1, #11, #21, #31 and so on) will be automatically sent to the Nouns DAO to
                be vested and shared among members of the project.
              </p>
              <p>
                Nouns DAO distributions don't interfere with the cadence of 15 minute auctions. Lil
                Nouns are sent directly to the Nouns DAO Treasury, and auctions continue on schedule
                with the next available Meoun ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
